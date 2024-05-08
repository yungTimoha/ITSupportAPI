import { Module } from '@nestjs/common';
import { AuthMainService } from './main/service';
import { AuthTokenService } from './jwt/service';
import { UserModule } from '@libs/user';
import { EncryptionModule } from '@libs/encryption';
import { PrismaModule } from '@libs/prisma';
import { AuthController } from './main/controller';
import { JwtStrategy, WebGuard } from '@libs/guard';

@Module({
  imports: [PrismaModule, UserModule, EncryptionModule],
  providers: [AuthMainService, AuthTokenService, JwtStrategy, WebGuard],
  controllers: [AuthController],
  exports: [AuthMainService],
})
export class AuthModule {}
