import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) { }
  async getUsers(): Promise<number> {
    return this.prisma.user.count();
  }
}
