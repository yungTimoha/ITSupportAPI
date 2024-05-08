import { Routes } from '@nestjs/core';
import { AuthModule } from '@libs/auth';
import { DepartmentModule } from '@libs/department';
import { StatusModule } from '@libs/status';
import { InquiryModule } from '@libs/inquiry';
import { MediaModule } from '@libs/media';
import { SolutionModule } from '@libs/solution';
import { UserModule } from '@libs/user';
import { AdminModule } from '@libs/admin';

export const routes: Routes = [
  {
    path: '/auth',
    module: AuthModule,
  },
  {
    path: '/inquiry',
    module: InquiryModule,
  },
  {
    path: '/department',
    module: DepartmentModule,
  },
  {
    path: '/status',
    module: StatusModule,
  },
  {
    path: '/media',
    module: MediaModule,
  },
  {
    path: '/solution',
    module: SolutionModule,
  },
  {
    path: '/user',
    module: UserModule,
  },
  {
    path: '/admin',
    module: AdminModule,
  },
];
