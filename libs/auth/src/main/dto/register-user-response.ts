import { Exclude } from 'class-transformer';
import { UserResponse } from '@libs/user';

@Exclude()
export class RegisterUserBodyResponse extends UserResponse {}
