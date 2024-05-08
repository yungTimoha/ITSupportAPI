import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthMainService } from './service';
import { RegisterUserBodyRequest } from './dto/register-user-request';
import { AuthUserBodyRequest } from './dto/auth-user-request';
import { RequestUserInterface, User, WebGuard } from '@libs/guard';
import { AuthUserResponse } from './dto/auth-user-response';

@ApiTags('AuthMain')
@Controller()
export class AuthController {
  constructor(private authService: AuthMainService) {}

  @ApiOperation({
    summary: 'Register user',
  })
  @Post('register')
  async register(
    @Body()
    data: RegisterUserBodyRequest,
  ) {
    return await this.authService.register(data);
  }

  @ApiOperation({
    summary: 'Auth user',
  })
  @Post('login')
  async login(@Body() data: AuthUserBodyRequest): Promise<AuthUserResponse> {
    return this.authService.login(data);
  }

  @ApiOperation({
    summary: 'Logout user',
  })
  @Post('logout')
  @UseGuards(WebGuard)
  @ApiBearerAuth()
  async logOut(@User() user: RequestUserInterface) {
    await this.authService.logout(user.id);
  }
}
