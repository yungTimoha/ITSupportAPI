import { Module } from '@nestjs/common';
import { UserModule } from '@libs/user';
import { SolutionModule } from '@libs/solution';
import { MediaModule } from '@libs/media';
import { InquiryModule } from '@libs/inquiry';
import { AdminUserController } from '@libs/admin/admin.user.controller';
import { AdminSolutionController } from '@libs/admin/admin.solution.controller';
import { AdminMediaController } from '@libs/admin/admin.media.controller';
import { AdminInquiryController } from '@libs/admin/admin.inquiry.controller';

@Module({
  imports: [UserModule, SolutionModule, MediaModule, InquiryModule],
  controllers: [
    AdminUserController,
    AdminSolutionController,
    AdminMediaController,
    AdminInquiryController,
  ],
})
export class AdminModule {}
