import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateFollowInput {
  @Field(() => String)
  followerId: string;
}
