import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { Article } from './dto/article.model';
import { ArticleService } from './article.service';
import { CreateArticleInput } from './dto/create-article.input';

@Resolver(() => Article)
export class ArticleResolver {
  constructor(
    private prisma: PrismaService,
    private articleService: ArticleService,
  ) {}

  // 記事の全件取得
  @Query(() => [Article])
  async articles() {
    return this.articleService.getArticles({});
  }

  // ユーザーが作成した記事の取得
  @Query(() => [Article])
  async articlesByUser(@CurrentUser() user: CurrentUser) {
    return this.articleService.getArticlesByUserId({ userId: user.id });
  }

  // 記事の詳細取得
  @Query(() => Article)
  async articleDetail(id) {
    return this.articleService.getArticleDetail({
      id,
    });
  }

  @Mutation(() => Article)
  createArticle(
    @Args('createArticleInput') createArticleInput: CreateArticleInput,
    @CurrentUser() user: CurrentUser,
  ) {
    return this.articleService.createArticle({
      title: createArticleInput.title,
      detail: createArticleInput.detail,
      userId: user.id,
    });
  }

  @Mutation(() => Article)
  updateArticle(
    @Args('updateArticleInput') updateArticleInput: CreateArticleInput,
    @CurrentUser() user: CurrentUser,
  ) {
    return this.articleService.updateArticle({
      id: user.id,
      title: updateArticleInput.title,
      detail: updateArticleInput.detail,
    });
  }
}
