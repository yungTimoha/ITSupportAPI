import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RequestUserInterface } from './interface/request';

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user as RequestUserInterface;
});
