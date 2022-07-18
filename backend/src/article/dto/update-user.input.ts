import { ID, InputType } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  title!: string;

  @Field(() => String)
  detail!: string;
}
