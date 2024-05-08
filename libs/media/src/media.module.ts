import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { PrismaModule } from '@libs/prisma';
import { MediaController } from '@libs/media/media.controller';

@Module({
  imports: [PrismaModule],
  providers: [MediaService],
  controllers: [MediaController],
  exports: [MediaService],
})
export class MediaModule {}
