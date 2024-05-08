import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/prisma';
import { Prisma, Solution } from '@prisma/client';
import {
  CreateSolutionInput,
  UpdateSolutionInput,
} from '@libs/solution/interface';

@Injectable()
export class SolutionService {
  constructor(private prisma: PrismaService) {}

  async getAll(tx?: Prisma.TransactionClient) {
    return (tx ?? this.prisma).solution.findMany();
  }

  async getById(id: string, tx?: Prisma.TransactionClient) {
    return (tx ?? this.prisma).solution.findUnique({
      where: { id },
    });
  }

  async create(
    data: CreateSolutionInput,
    tx?: Prisma.TransactionClient,
  ): Promise<Solution> {
    return (tx ?? this.prisma).solution.create({
      data,
    });
  }

  async update(
    id: string,
    data: UpdateSolutionInput,
    tx?: Prisma.TransactionClient,
  ) {
    return (tx ?? this.prisma).solution.update({
      where: { id },
      data,
    });
  }

  async delete(id: string, tx?: Prisma.TransactionClient) {
    return (tx ?? this.prisma).solution.delete({
      where: { id },
    });
  }
}
