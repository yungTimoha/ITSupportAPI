import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { CreateMediaInput } from '@libs/media/interface';
import { MediaType } from '@prisma/client';

@Exclude()
export class CreateMediaRequest implements CreateMediaInput {
  @Expose()
  @ApiProperty()
  @IsString()
  src: string;

  @Expose()
  @ApiProperty({ enum: MediaType })
  @IsEnum(MediaType)
  type: MediaType;
}
