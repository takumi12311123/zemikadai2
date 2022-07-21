import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FollowService {
  constructor(private prisma: PrismaService) {}

  getFollowers({ followerId }: { followerId: string }) {
    return this.prisma.follow.findMany({
      where: { followerId },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  getFollowees({ followeeId }: { followeeId: string }) {
    return this.prisma.follow.findMany({
      where: { followeeId },
    });
  }

  createFollow({
    followeeId,
    followerId,
  }: {
    followeeId: string;
    followerId: string;
  }) {
    return this.prisma.follow.create({ data: { followeeId, followerId } });
  }
}
