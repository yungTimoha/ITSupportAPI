import { ApiTags } from '@nestjs/swagger';
import { UserService } from '@libs/user/user.service';
import { Controller } from '@nestjs/common';

@ApiTags('User')
@Controller()
export class UserController {
  constructor(private userService: UserService) {}
}
