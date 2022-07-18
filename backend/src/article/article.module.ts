import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ArticleResolver } from './article.resolver';
import { ArticleService } from './article.service';

@Module({
    providers: [ArticleService, ArticleResolver],
    exports: [ArticleService],
    imports: [PrismaModule],
})
export class ArticleModule { }