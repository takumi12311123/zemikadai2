import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FollowService {
  constructor(private prisma: PrismaService) {}

  getfollowers({}: {}) {
    return this.prisma.follow.findMany();
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
