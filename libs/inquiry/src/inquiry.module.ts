import { Module } from '@nestjs/common';
import { InquiryService } from './inquiry.service';
import { PrismaModule } from '@libs/prisma';
import { InquiryController } from '@libs/inquiry/inquiry.controller';

@Module({
  imports: [PrismaModule],
  providers: [InquiryService],
  controllers: [InquiryController],
  exports: [InquiryService],
})
export class InquiryModule {}
