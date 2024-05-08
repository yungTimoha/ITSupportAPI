import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { PrismaModule } from '@libs/prisma';
import { StatusController } from './status.controller';

@Module({
  imports: [PrismaModule],
  providers: [StatusService],
  controllers: [StatusController],
  exports: [StatusService],
})
export class StatusModule {}
