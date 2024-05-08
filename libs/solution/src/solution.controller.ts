import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { SolutionService } from '@libs/solution/solution.service';

@ApiTags('Solution')
@Controller()
export class SolutionController {
  constructor(private solutionService: SolutionService) {}
}
