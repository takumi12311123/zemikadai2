import { InputType } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';

@InputType()
export class CreateArticleInput {
  
    @Field(() => String)
    title: string;
  
    @Field(() => String)
    detail: string;
}
