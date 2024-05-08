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
import { SolutionService } from '@libs/solution/solution.service';
import { Roles, WebGuard } from '@libs/guard';
import { CreateSolutionRequest } from '@libs/solution/dto/create.request';
import { UpdateSolutionRequest } from '@libs/solution/dto/update.request';
import { UserRole } from '@prisma/client';

@ApiTags('Admin solution')
@Controller('solution')
export class AdminSolutionController {
  constructor(private solutionService: SolutionService) {}

  @ApiOperation({ summary: 'Get all solutions' })
  @Get()
  @Roles(UserRole.Admin, UserRole.Pm, UserRole.Analyst)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getAll() {
    return this.solutionService.getAll();
  }

  @ApiOperation({ summary: 'Create solution solutions' })
  @Post()
  @Roles(UserRole.Admin, UserRole.Pm, UserRole.Analyst)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async create(@Body() data: CreateSolutionRequest) {
    return this.solutionService.create(data);
  }

  @ApiOperation({ summary: 'Get solution by id' })
  @Get(':id')
  @Roles(UserRole.Admin, UserRole.Pm, UserRole.Analyst)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async getById(@Param('id') id: string) {
    return this.solutionService.getById(id);
  }

  @ApiOperation({ summary: 'Update solution' })
  @Put(':id')
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async update(@Param('id') id: string, @Body() data: UpdateSolutionRequest) {
    return this.solutionService.update(id, data);
  }

  @ApiOperation({ summary: 'Delete solution' })
  @Delete(':id')
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @UseGuards(WebGuard)
  async delete(@Param('id') id: string) {
    return this.solutionService.delete(id);
  }
}
