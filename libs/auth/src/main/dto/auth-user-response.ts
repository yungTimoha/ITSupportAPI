import { Exclude, Expose, Type } from 'class-transformer';
import { IsNotEmptyObject, IsObject, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TokensBodyResponse } from './tokens-response';
import { UserResponse } from '@libs/user';

@Exclude()
export class AuthUserResponse {
  @IsObject()
  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => UserResponse)
  user: UserResponse;

  @Expose()
  @IsObject()
  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => TokensBodyResponse)
  tokens: TokensBodyResponse;
}
