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

  async getAllFollower({ userId }: { userId: string }) {
    const result = await this.prisma.user.findMany({
      where: {
        id: userId,
      },
      select: {
        NumFollowers: true,
      },
    });
    return result
  }

  getAllFollowings({ userId }: { userId: string }) {
    return this.prisma.user.findMany({
      where: {
        id: userId,
      },
    });
  }

  async getNumOfFollower({ userId }: { userId: string }) {
    const result = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        _count: {
          select: {
            NumFollowers: true,
          },
        },
      },
    });
    return result._count.NumFollowers;
  }

  async getNumOfFollowing({ userId }: { userId: string }) {
    const result = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        _count: {
          select: {
            Numfollowings: true,
          },
        },
      },
    });
    return result._count.Numfollowings;
  }
}
