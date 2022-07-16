import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers({}: {}) {
    return this.prisma.user.findMany();
  }

  getUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  createUsers({ name, email }: { name: string; email: string }) {
    return this.prisma.user.create({ data: { name, email } });
  }

  updateUsers({
    id,
    name,
    email,
  }: {
    id: string;
    name: string;
    email: string;
  }) {
    return this.prisma.user.update({
      data: { name, email },
      where: {
        id,
      },
    });
  }
}
