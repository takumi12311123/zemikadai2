import { InputType } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  description!: string;
}
