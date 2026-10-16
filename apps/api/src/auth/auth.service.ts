import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './register.dto.js';
import { hashPassword } from './password.js';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) { }

  async register(data: RegisterDto) {
    const { name, email, password } = data;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('E-mail já em uso');
    }

    const newUser = await this.prisma.user.create({
      omit: { passwordHash: true },
      data: {
        name,
        email,
        passwordHash: await hashPassword(password),
      },
    });

    return newUser;
  }
}
