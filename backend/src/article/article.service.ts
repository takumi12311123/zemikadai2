import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  getArticles({}: {}) {
    return this.prisma.article.findMany();
  }

  getArticlesByUserId({ userId }: { userId: string }) {
    return this.prisma.article.findMany({
      where: {
        userId,
      },
    });
  }

  getArticleDetail({ id }: { id: string }) {
    return this.prisma.article.findMany({
      where: {
        id,
      },
    });
  }

  createArticle({
    title,
    detail,
    userId,
  }: {
    title: string;
    detail: string;
    userId: string;
  }) {
    return this.prisma.article.create({
      data: { title, detail, userId },
    });
  }

  updateArticle({
    id,
    title,
    detail,
  }: {
    id: string;
    title: string;
    detail: string;
  }) {
    return this.prisma.article.update({
      data: { id, title, detail },
      where: {
        id,
      },
    });
  }
}
