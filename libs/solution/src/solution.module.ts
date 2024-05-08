import { Module } from '@nestjs/common';
import { SolutionService } from './solution.service';
import { PrismaModule } from '@libs/prisma';
import { SolutionController } from '@libs/solution/solution.controller';

@Module({
  imports: [PrismaModule],
  providers: [SolutionService],
  controllers: [SolutionController],
  exports: [SolutionService],
})
export class SolutionModule {}
