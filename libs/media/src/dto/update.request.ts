import { Exclude, Expose } from 'class-transformer';
import { UpdateMediaInput } from '@libs/media/interface';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { MediaType } from '@prisma/client';

@Exclude()
export class UpdateMediaRequest implements UpdateMediaInput {
  @Expose()
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  src?: string;

  @Expose()
  @ApiPropertyOptional({ enum: MediaType })
  @IsEnum(MediaType)
  @IsOptional()
  type?: MediaType;
}
