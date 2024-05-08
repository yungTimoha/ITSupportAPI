import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { DepartmentService } from '@libs/department/department.service';

@ApiTags('Department')
@Controller()
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Get()
  async getAll() {
    return this.departmentService.getAll();
  }
}
