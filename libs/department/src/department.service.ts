import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  async getAll(tx?: Prisma.TransactionClient) {
    // return (tx ?? this.prisma).department.findMany();
  }
}
