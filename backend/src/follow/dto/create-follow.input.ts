import { InputType } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';

@InputType()
export class CreateFollowInput {
  @Field(() => String)
  followerId: string;
}
