import { User } from '@prisma/client';

export interface BaseUserService {
  read: (id: string) => Promise<User>;
}
