import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return {
      id: 'user-id-1',
      name: 'takuaka',
    };
  },
);

export type CurrentUser = {
  id: string;
  name: string;
};
