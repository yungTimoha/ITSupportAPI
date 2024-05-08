import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { RegisterUserInput } from '../../interface/main';

@Exclude()
export class RegisterUserBodyRequest implements RegisterUserInput {
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
