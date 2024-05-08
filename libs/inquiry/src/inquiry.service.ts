import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/prisma';
import { Category, Department, Inquiry, Prisma } from '@prisma/client';
import {
  CreateInquiryInput,
  SubmitInquiryInput,
  UpdateInquiryInput,
} from './interface';

@Injectable()
export class InquiryService {
  constructor(private prisma: PrismaService) {}

  async getQualityInquiry(tx?: Prisma.TransactionClient): Promise<Inquiry[]> {
    return (tx ?? this.prisma).inquiry.findMany({
      where: {
        department: Department.Quality,
      },
    });
  }

  async getTechnicalInquiry(tx?: Prisma.TransactionClient): Promise<Inquiry[]> {
    return (tx ?? this.prisma).inquiry.findMany({
      where: {
        department: Department.Technical,
      },
    });
  }

  async getFinanceInquiry(tx?: Prisma.TransactionClient): Promise<Inquiry[]> {
    return (tx ?? this.prisma).inquiry.findMany({
      where: {
        department: Department.Finance,
      },
    });
  }

  async passInquiryToDepartment(id: string, department: Department) {
    return this.update(id, {
      department,
    });
  }

  async getByUserId(userId: string): Promise<Inquiry[]> {
    return this.prisma.inquiry.findMany({
      where: {
        user_id: userId,
      },
    });
  }

  async getAll() {
    return this.prisma.inquiry.findMany();
  }

  async getById(id: string, tx?: Prisma.TransactionClient): Promise<Inquiry> {
    return (tx ?? this.prisma).inquiry.findUnique({
      where: { id },
    });
  }

  async create(
    data: CreateInquiryInput,
    tx?: Prisma.TransactionClient,
  ): Promise<Inquiry> {
    return (tx ?? this.prisma).inquiry.create({
      data: {
        content: data.content,
        user_id: data.userId,
        status: data.status,
        priority: data.priority,
        department: data.department,
        category: data.category,
      },
    });
  }

  async update(
    id: string,
    data: UpdateInquiryInput,
    tx?: Prisma.TransactionClient,
  ): Promise<Inquiry> {
    return (tx ?? this.prisma).inquiry.update({
      where: { id },
      data: {
        content: data.content,
        user_id: data.userId,
        status: data.status,
        priority: data.priority,
        department: data.department,
        category: data.category,
      },
    });
  }

  async delete(id: string, tx?: Prisma.TransactionClient): Promise<Inquiry> {
    return (tx ?? this.prisma).inquiry.delete({
      where: { id },
    });
  }

  async submitInquiry(data: SubmitInquiryInput) {
    return this.create({
      content: data.content,
      userId: data.userId,
      category: data.category,
    });
  }

  async getCategories() {
    return Category;
  }
}
