import { Exclude, Expose } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { UpdateSolutionInput } from '@libs/solution/interface';

@Exclude()
export class UpdateSolutionRequest implements UpdateSolutionInput {
  @Expose()
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  content?: string;

  @Expose()
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  inquiry_id?: string;

  @Expose()
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  video_id?: string;
}
