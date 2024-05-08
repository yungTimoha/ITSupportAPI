import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { StatusService } from '@libs/status/status.service';

@ApiTags('Inquiry status')
@Controller()
export class StatusController {
  constructor(private statusService: StatusService) {}

  @Get()
  async getAll() {
    return this.statusService.getAll();
  }
}
