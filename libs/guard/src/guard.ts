import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

@Injectable()
export class WebGuard extends AuthGuard('WebStrategy') {
  constructor(private reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const role = this.reflector.get<string[]>('roles', context.getHandler());
    const parentCanActivate = await super.canActivate(context);
    if (!role) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];
    const user = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString(),
    );
    const trueRole = role.includes(user.role);
    return parentCanActivate && trueRole;
  }
}
