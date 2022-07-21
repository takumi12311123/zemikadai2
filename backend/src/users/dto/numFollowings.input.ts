import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NumFollowings {
  @Field(() => Number)
  numberOfFollowings: number;
}
