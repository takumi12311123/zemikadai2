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

  createUsers({
    name,
    email,
    description,
  }: {
    name: string;
    email: string;
    description: string;
  }) {
    return this.prisma.user.create({ data: { name, email, description } });
  }

  updateUsers({
    id,
    name,
    email,
    description,
  }: {
    id: string;
    name: string;
    email: string;
    description: string;
  }) {
    return this.prisma.user.update({
      data: { name, email, description },
      where: {
        id,
      },
    });
  }
}
