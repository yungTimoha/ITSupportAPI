import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MediaService } from '@libs/media/media.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Roles, WebGuard } from '@libs/guard';
import { CreateMediaRequest } from '@libs/media/dto/create.request';
import { UpdateMediaRequest } from '@libs/media/dto/update.request';
import { UserRole } from '@prisma/client';

@ApiTags('Admin media')
@Controller('media')
export class AdminMediaController {
  constructor(private mediaService: MediaService) {}

  @ApiOperation({ summary: 'Get all media' })
  @Get()
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getAll() {
    return this.mediaService.getAll();
  }

  @ApiOperation({ summary: 'Create media' })
  @Post()
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async create(@Body() data: CreateMediaRequest) {
    return this.mediaService.create(data);
  }

  @ApiOperation({ summary: 'Get media by id' })
  @Get(':id')
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getById(@Param('id') id: string) {
    return this.mediaService.getById(id);
  }

  @ApiOperation({ summary: 'Update media' })
  @Put(':id')
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async update(@Param('id') id: string, @Body() data: UpdateMediaRequest) {
    return this.mediaService.update(id, data);
  }

  @ApiOperation({ summary: 'Delete media' })
  @Delete(':id')
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async delete(@Param('id') id: string) {
    return this.mediaService.delete(id);
  }
}
