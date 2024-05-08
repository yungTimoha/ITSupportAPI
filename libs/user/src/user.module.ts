import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from '@libs/prisma';
import { EncryptionModule } from '@libs/encryption';
import { UserController } from '@libs/user/user.controller';

@Module({
  imports: [PrismaModule, EncryptionModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
