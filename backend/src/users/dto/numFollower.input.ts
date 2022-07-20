import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NumFollowers {
  @Field(() => Number)
  numberOfFollowers: number;
}
