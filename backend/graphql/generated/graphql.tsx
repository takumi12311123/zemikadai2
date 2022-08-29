export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Article = {
  __typename?: 'Article';
  createdAt: Scalars['DateTime'];
  detail: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateArticleInput = {
  detail: Scalars['String'];
  title: Scalars['String'];
};

export type CreateFollowInput = {
  followerId: Scalars['String'];
};

export type CreateUserInput = {
  description: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Follow = {
  __typename?: 'Follow';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
  createFollow: Follow;
  createUsers: User;
  updateArticle: Article;
  updateUsers: User;
};

export type MutationCreateArticleArgs = {
  createArticleInput: CreateArticleInput;
};

export type MutationCreateFollowArgs = {
  createFollowInput: CreateFollowInput;
};

export type MutationCreateUsersArgs = {
  createUserInput: CreateUserInput;
};

export type MutationUpdateArticleArgs = {
  updateArticleInput: CreateArticleInput;
};

export type MutationUpdateUsersArgs = {
  updateUserInput: UpdateUserInput;
};

export type NumFollowers = {
  __typename?: 'NumFollowers';
  numberOfFollowers: Scalars['Float'];
};

export type NumFollowings = {
  __typename?: 'NumFollowings';
  numberOfFollowings: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  allArticlesByUserId: Array<Article>;
  articleDetail: Article;
  articles: Array<Article>;
  articlesByUser: Array<Article>;
  followers: Array<Follow>;
  followings: Array<Follow>;
  getUserByEmail: User;
  numFollowers: NumFollowers;
  numFollowings: NumFollowings;
  users: Array<User>;
};

export type QueryAllArticlesByUserIdArgs = {
  userId: Scalars['String'];
};

export type QueryArticleDetailArgs = {
  id: Scalars['String'];
};

export type QueryGetUserByEmailArgs = {
  email: Scalars['String'];
};

export type UpdateUserInput = {
  description: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
