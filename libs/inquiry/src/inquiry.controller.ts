import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { InquiryService } from './inquiry.service';
import { RequestUserInterface, Roles, User, WebGuard } from '@libs/guard';
import { SubmitInquiryRequest } from './dto/submit-inquiry.request';
import { Department, Inquiry, Prisma } from '@prisma/client';

@ApiTags('Inquiry')
@Controller()
export class InquiryController {
  constructor(private inquiryService: InquiryService) {}

  @Get('user')
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getByUserId(@User() user: RequestUserInterface): Promise<Inquiry[]> {
    return this.inquiryService.getByUserId(user.id);
  }

  @Get('category')
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getCategories() {
    return this.inquiryService.getCategories();
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async submitInquiry(
    @User() user: RequestUserInterface,
    @Body() data: SubmitInquiryRequest,
  ) {
    return this.inquiryService.submitInquiry({
      userId: user.id,
      ...data,
    });
  }
}
