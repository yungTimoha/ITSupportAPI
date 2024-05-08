import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/prisma';
import { Prisma, User } from '@prisma/client';
import { CreateUserInput, UpdateUserInput } from './interface';
import { EncryptionService } from '@libs/encryption';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from '@libs/config';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService<ConfigType, true>,
    private encryptionService: EncryptionService,
  ) {}

  private hashPrivate = this.configService.get('HASH_PRIVATE');

  async getAll() {
    return this.prisma.user.findMany();
  }

  async getById(id: string, tx?: Prisma.TransactionClient): Promise<User> {
    return (tx ?? this.prisma).user.findUnique({
      where: { id },
    });
  }

  async getByEmail(
    email: string,
    tx?: Prisma.TransactionClient,
  ): Promise<User> {
    return (tx ?? this.prisma).user.findUnique({
      where: { email },
    });
  }

  async createWithHashPassword(data: CreateUserInput) {
    if (data.password) {
      data.password = this.encryptionService.hashString(
        data.password,
        this.hashPrivate,
      );
    }
    return this.prisma.user.create({
      data: {
        name: data.name,
        age: data.age,
        email: data.email,
        password: data.password,
        role: data.role,
        secret: data.secret,
        department_id: data.departmentId,
      },
    });
  }

  async create(
    data: CreateUserInput,
    tx?: Prisma.TransactionClient,
  ): Promise<User> {
    return (tx ?? this.prisma).user.create({
      data: {
        name: data.name,
        age: data.age,
        email: data.email,
        password: data.password,
        role: data.role,
        secret: data.secret,
        department_id: data.departmentId,
      },
    });
  }

  async update(
    id: string,
    data: UpdateUserInput,
    tx?: Prisma.TransactionClient,
  ): Promise<User> {
    return (tx ?? this.prisma).user.update({
      where: { id },
      data: {
        name: data.name,
        age: data.age,
        email: data.email,
        password: data.password,
        role: data.role,
        secret: data.secret,
        department_id: data.departmentId,
      },
    });
  }

  async delete(id: string, tx?: Prisma.TransactionClient): Promise<User> {
    return (tx ?? this.prisma).user.delete({
      where: { id },
    });
  }
}
