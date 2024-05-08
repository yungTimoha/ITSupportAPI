import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateSolutionInput } from '@libs/solution/interface';

@Exclude()
export class CreateSolutionRequest implements CreateSolutionInput {
  @Expose()
  @ApiProperty()
  @IsString()
  content: string;

  @Expose()
  @ApiProperty()
  @IsString()
  inquiry_id: string;

  @Expose()
  @ApiProperty()
  @IsString()
  video_id: string;
}
