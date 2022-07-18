import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Article {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  detail: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
