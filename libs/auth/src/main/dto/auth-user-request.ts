import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { AuthUserInput } from '../../interface/main';

@Exclude()
export class AuthUserBodyRequest implements AuthUserInput {
  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}
