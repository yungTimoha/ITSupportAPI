import { Exclude, Expose } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { UpdateUserInput } from '@libs/user/interface';
import { UserRole } from '@prisma/client';

@Exclude()
export class UpdateUserRequest implements UpdateUserInput {
  @Expose()
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name?: string;

  @Expose()
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  age?: string;

  @Expose()
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  email?: string;

  @Expose()
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  password?: string;

  @Expose()
  @ApiPropertyOptional()
  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;

  @Expose()
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  secret?: string;

  @Expose()
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  departmentId?: string;
}
