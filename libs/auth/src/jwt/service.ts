import * as jwt from 'jsonwebtoken';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from '@libs/user';
import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';
import { ConfigType } from '@libs/config';
import { AccessTokenWithExpiration } from '../interface/jwt';
import { PrismaService } from '@libs/prisma';
import { RequestUserInterface } from '@libs/guard';

@Injectable()
export class AuthTokenService {
  constructor(
    private userService: UserService,
    private prisma: PrismaService,
    private configService: ConfigService<ConfigType, true>,
  ) {}

  private jwtSecret = this.configService.get('JWT_SECRET');
  private jwtAccessTokenTTL = this.configService.get('JWT_ACCESS_TOKEN_TTL');

  async generateAuthTokensForUser(
    userId: string,
  ): Promise<AccessTokenWithExpiration> {
    const user = await this.userService.getById(userId);

    const userPayload = {
      id: userId,
      role: user.role,
    };

    const now = Date.now();
    const accessToken = jwt.sign(
      {
        ...userPayload,
      } as RequestUserInterface,
      user.secret + this.jwtSecret,
      {
        expiresIn: Number(this.jwtAccessTokenTTL),
      },
    );
    return {
      access_token: accessToken,
      access_token_expires_at: now + this.jwtAccessTokenTTL * 1000,
    };
  }

  async verifyUserAuthByAccessToken(
    accessToken: string,
  ): Promise<User & RequestUserInterface> {
    try {
      const user = await this.getUserFromAccessToken(accessToken);

      return {
        ...user,
      };
    } catch (e) {
      throw new ForbiddenException();
    }
  }

  async getUserFromAccessToken(
    accessToken: string,
  ): Promise<User & RequestUserInterface> {
    try {
      const payload = jwt.decode(accessToken);
      const userId = payload['id'];
      if (!userId) throw Error();
      return this.prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
    } catch (e) {
      throw new ForbiddenException();
    }
  }
}
