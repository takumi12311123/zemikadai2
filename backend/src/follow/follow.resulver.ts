import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFollowInput } from './dto/create-follow.input';
import { Follow } from './dto/follow.model';
import { FollowService } from './follow.service';

@Resolver(() => Follow)
export class FollowResolver {
  constructor(
    private prisma: PrismaService,
    private followService: FollowService,
  ) {}

  // followerの取得
  @Query(() => [Follow])
  async followings(@CurrentUser() user: CurrentUser) {
    return this.followService.getFollowers({
      followerId: user.id,
    });
  }

  // followeeの取得
  @Query(() => [Follow])
  async followers(@CurrentUser() user: CurrentUser) {
    return this.followService.getFollowees({
      followeeId: user.id,
    });
  }

  @Mutation(() => Follow)
  createFollow(
    @Args('createFollowInput') createFollowInput: CreateFollowInput,
    @CurrentUser() user: CurrentUser,
  ) {
    return this.followService.createFollow({
      followeeId: user.id,
      followerId: createFollowInput.followerId,
    });
  }
}
