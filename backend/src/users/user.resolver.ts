import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { NumFollowers } from './dto/numFollower.input';
import { NumFollowings } from './dto/numFollowings.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './dto/user.model';
import { UsersService } from './user.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  @Query(() => [User])
  async users() {
    return this.usersService.getUsers();
  }

  @Query(() => User)
  async getUserByEmail(@Args('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }

  @Mutation(() => User)
  createUsers(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUsers({
      name: createUserInput.name,
      email: createUserInput.email,
      description: createUserInput.description,
    });
  }

  @Mutation(() => User)
  updateUsers(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @CurrentUser() user: CurrentUser,
  ) {
    return this.usersService.updateUsers({
      id: user.id,
      name: updateUserInput.name,
      email: updateUserInput.email,
      description: updateUserInput.description,
    });
  }

  @Query(() => NumFollowers, { name: 'numFollowers' })
  async getNumOfFollowers(@CurrentUser() user: CurrentUser) {
    const numberOfFollowers = await this.usersService.getNumOfFollower({
      userId: user.id,
    });
    return {
      numberOfFollowers,
    };
  }

  @Query(() => NumFollowings, { name: 'numFollowings' })
  async getNumOfFollowing(@CurrentUser() user: CurrentUser) {
    const numberOfFollowings = await this.usersService.getNumOfFollowing({
      userId: user.id,
    });
    return {
      numberOfFollowings,
    };
  }
}
