import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

@Exclude()
export class RefreshTokensBodyRequest {
  @Expose()
  @ApiProperty()
  @IsString()
  refresh_token: string;
}
