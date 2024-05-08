import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
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
import { UserService } from '@libs/user/user.service';
import { CreateUserRequest, UpdateUserRequest } from '@libs/user';
import { UserRole } from '@prisma/client';
import { Roles, WebGuard } from '@libs/guard';


@ApiTags('Admin user')
@Controller('user')
export class AdminUserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getAll() {
    return this.userService.getAll();
  }

  @ApiOperation({ summary: 'Get user by id' })
  @Get(':id')
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @ApiOperation({ summary: 'Create user' })
  @Post()
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async create(@Body() data: CreateUserRequest) {
    return this.userService.create(data);
  }

  @ApiOperation({ summary: 'Update user' })
  @Put(':id')
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async update(@Param('id') id: string, @Body() data: UpdateUserRequest) {
    return this.userService.update(id, data);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
