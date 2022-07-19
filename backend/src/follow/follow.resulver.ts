import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { Follow } from './dto/follow.model';
import { CreateFollowInput } from './dto/create-follow.input';
import { FollowService } from './follow.service';

@Resolver(() => Follow)
export class FollowResolver {
  constructor(
    private prisma: PrismaService,
    private followService: FollowService,
  ) {}

  @Query(() => [Follow])
  async followers() {
    return this.followService.getfollowers({});
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
