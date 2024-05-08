import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from '@libs/config';
import * as jwt from 'jsonwebtoken';
import { RequestUserInterface } from './interface/request';
import { PrismaService } from '@libs/prisma';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'WebStrategy') {
  constructor(
    private configService: ConfigService<ConfigType, true>,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        ExtractJwt.fromUrlQueryParameter('token'),
      ]),
      ignoreExpiration: false,
      secretOrKeyProvider: async (request, rawJwtToken, done) => {
        const data = {};
        try {
          Object.assign(data, [jwt.decode(rawJwtToken)]);
          const user = await this.prisma.user.findUnique({
            where: {
              id: data['0'].id,
            },
          });
          if (!user) {
            return done(new UnauthorizedException());
          }

          return done(null, user.secret + this.configService.get('JWT_SECRET'));
        } catch (err) {
          return done(new UnauthorizedException());
        }
      },
    });
  }

  async validate(payload: RequestUserInterface): Promise<unknown> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: payload.id,
        },
      });

      return {
        ...payload,
        user,
      };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
