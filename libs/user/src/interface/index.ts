import { UserRole } from '@prisma/client';

export interface CreateUserInput {
  name?: string;
  age?: string;
  email: string;
  password: string;
  role?: UserRole;
  secret?: string;
  departmentId?: string;
}

export interface UpdateUserInput {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  role?: UserRole;
  secret?: string;
  departmentId?: string;
}
