import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { FollowResolver } from './follow.resulver';
import { FollowService } from './follow.service';

@Module({
  providers: [FollowService, FollowResolver],
  exports: [FollowService],
  imports: [PrismaModule],
})
export class FollowModule {}
