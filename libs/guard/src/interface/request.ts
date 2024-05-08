import { UserRole } from '@prisma/client';

export interface RequestUserInterface {
  id: string;
  role: UserRole;
}
