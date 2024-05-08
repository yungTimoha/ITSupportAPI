import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Exclude()
export class TokensBodyResponse {
  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  access_token: string;

  @Expose()
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  access_token_expires_at: number;

  // @Expose()
  // @ApiProperty()
  // @IsString()
  // @IsNotEmpty()
  // refresh_token: string;
  //
  // @Expose()
  // @ApiProperty()
  // @IsNumber()
  // @IsNotEmpty()
  // refresh_token_expires_at: number;
}
