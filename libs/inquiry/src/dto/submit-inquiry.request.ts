import { Exclude, Expose } from 'class-transformer';
import { SubmitInquiryInput } from '../interface';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { Category } from '@prisma/client';

@Exclude()
export class SubmitInquiryRequest implements Partial<SubmitInquiryInput> {
  @Expose()
  @ApiProperty({ enum: Category })
  @IsEnum(Category)
  category: Category;

  @Expose()
  @ApiProperty()
  @IsString()
  content: string;
}
