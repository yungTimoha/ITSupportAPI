import { ApiTags } from '@nestjs/swagger';
import { MediaService } from '@libs/media/media.service';
import { Controller } from '@nestjs/common';

@ApiTags('Media')
@Controller()
export class MediaController {
  constructor(private mediaService: MediaService) {}
}
