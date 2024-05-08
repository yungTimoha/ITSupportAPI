import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { PrismaModule } from '@libs/prisma';
import { DepartmentController } from './department.controller';

@Module({
  imports: [PrismaModule],
  providers: [DepartmentService],
  controllers: [DepartmentController],
  exports: [DepartmentService],
})
export class DepartmentModule {}
