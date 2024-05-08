import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Roles, WebGuard } from '@libs/guard';
import { Department, Inquiry, UserRole } from '@prisma/client';
import { InquiryService } from '@libs/inquiry';
import {
  CreateInquiryInput,
  UpdateInquiryInput,
} from '@libs/inquiry/interface';

@ApiTags('Admin inquiry')
@Controller('inquiry')
export class AdminInquiryController {
  constructor(private inquiryService: InquiryService) {}

  @Get('quality')
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getQualityInquiry(): Promise<Inquiry[]> {
    return this.inquiryService.getQualityInquiry();
  }

  @Get('technical')
  @Roles(UserRole.Admin, UserRole.Pm)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getTechnicalInquiry(): Promise<Inquiry[]> {
    return this.inquiryService.getTechnicalInquiry();
  }

  @Get('finance')
  @Roles(UserRole.Admin, UserRole.Analyst)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getFinanceInquiry(): Promise<Inquiry[]> {
    return this.inquiryService.getFinanceInquiry();
  }

  @ApiQuery({
    name: 'department',
    required: true,
    type: String,
  })
  @Put(':id/department')
  @Roles(UserRole.Admin, UserRole.Pm, UserRole.Analyst)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async passInquiryToDepartment(
    @Param('id') id: string,
    @Query('department') department: Department,
  ): Promise<Inquiry> {
    return this.inquiryService.passInquiryToDepartment(id, department);
  }

  @ApiOperation({ summary: 'Get all inquiries' })
  @Get()
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getAll() {
    return this.inquiryService.getAll();
  }

  @ApiOperation({ summary: 'Get inquiry by id' })
  @Get(':id')
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getById(@Param('id') id: string) {
    return this.inquiryService.getById(id);
  }

  @ApiOperation({ summary: 'Create inquiry' })
  @Post()
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async create(@Body() data: CreateInquiryInput) {
    return this.inquiryService.create(data);
  }

  @ApiOperation({ summary: 'Update inquiry' })
  @Put(':id')
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async update(@Param('id') id: string, @Body() data: UpdateInquiryInput) {
    return this.inquiryService.update(id, data);
  }

  @ApiOperation({ summary: 'Delete inquiry' })
  @Delete(':id')
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async delete(@Param('id') id: string) {
    return this.inquiryService.delete(id);
  }
}
