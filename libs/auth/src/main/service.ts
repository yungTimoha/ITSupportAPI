import { HttpStatus, Injectable } from '@nestjs/common';
import { AuthTokenService } from '../jwt/service';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from '@libs/config';
import { ApplicationError, ErrorCode } from '@libs/error';
import { UserService } from '@libs/user';
import { v4 } from 'uuid';
import { AuthUserInput, RegisterUserInput } from '../interface/main';
import { EncryptionService } from '@libs/encryption';
import { PrismaService } from '@libs/prisma';

@Injectable()
export class AuthMainService {
  constructor(
    private tokenService: AuthTokenService,
    private encryptionService: EncryptionService,
    private prisma: PrismaService,
    private userService: UserService,
    private configService: ConfigService<ConfigType, true>,
  ) {}
  private hashPrivate = this.configService.get('HASH_PRIVATE', { infer: true });

  async register(data: RegisterUserInput) {
    return await this.prisma.startTransaction('RegisterUser', async (tx) => {
      const user = await this.userService.getByEmail(data.email, tx);
      if (user)
        throw new ApplicationError(
          `User with this email already exists`,
          'USER_ALREADY_EXISTS',
          HttpStatus.CONFLICT,
        );

      const hashPassword = this.encryptionService.hashString(
        data.password,
        this.hashPrivate,
      );
      return this.userService.create(
        {
          email: data.email,
          password: hashPassword,
        },
        tx,
      );
    });
  }

  async login(data: AuthUserInput) {
    return this.prisma.startTransaction('LoginUser', async (tx) => {
      const user = await this.userService.getByEmail(data.email, tx);
      const hashPassword = this.encryptionService.hashString(
        data.password,
        this.hashPrivate,
      );
      if (!user || hashPassword !== user.password)
        throw new ApplicationError(
          'User with this username and password not found',
          ErrorCode.InvalidData,
          HttpStatus.BAD_REQUEST,
        );
      const tokens = await this.tokenService.generateAuthTokensForUser(user.id);
      return { user, tokens };
    });
  }

  async logout(userId: string) {
    return this.userService.update(userId, {
      secret: v4(),
    });
  }
}
