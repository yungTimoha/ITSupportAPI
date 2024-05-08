import { Exclude, Expose } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CreateUserInput } from '@libs/user/interface';
import { UserRole } from '@prisma/client';

@Exclude()
export class CreateUserRequest implements CreateUserInput {
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
  @ApiProperty()
  @IsString()
  email: string;

  @Expose()
  @ApiProperty()
  @IsString()
  password: string;

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
