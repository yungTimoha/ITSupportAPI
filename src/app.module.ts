import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalConfigModule } from '@libs/config';
import { RouterModule } from '@nestjs/core';
import { routes } from './routes';
import { AuthModule } from '@libs/auth';
import { DepartmentModule } from '@libs/department';
import { StatusModule } from '@libs/status';
import { InquiryModule } from '@libs/inquiry';
import { MediaModule } from '@libs/media';
import { SolutionModule } from '@libs/solution';
import { AdminModule } from '@libs/admin';

@Module({
  imports: [
    RouterModule.register(routes),
    GlobalConfigModule,
    AuthModule,
    DepartmentModule,
    StatusModule,
    InquiryModule,
    MediaModule,
    SolutionModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
