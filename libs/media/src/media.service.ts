import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/prisma';

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.media.findMany();
  }

  async getById(id: string) {
    return this.prisma.media.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return this.prisma.media.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return this.prisma.media.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.media.delete({
      where: { id },
    });
  }
}
