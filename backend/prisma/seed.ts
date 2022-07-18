import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const takuaka = await prisma.user.create({
    data: {
      id: 'user-id-1',
      name: 'サカス',
      email: 'example.com',
      description: '私の名前はサカスです',
      articles: {
        create: {
          id: 'article-id-2',
          detail: 'aaa',
          title: 'title',
        },
      },
    },
  });

  const takuami = await prisma.user.create({
    data: {
      id: 'user-id-2',
      name: 'たくみん',
      email: 'example.acom',
      description: '私の名前は、たくみんです',
    },
  });

  const takumi2 = await prisma.user.create({
    data: {
      id: 'user-id-3',
      name: 'みくた',
      email: 'examdple.com',
      description: '最近あついのよ',
    },
  });

  const akasaka = await prisma.user.create({
    data: {
      id: 'user-id-4',
      name: 'さかすすすす',
      email: 'example1.com',
      description: 'ブラック部活について語っています',
    },
  });

  await prisma.article.createMany({
    // seedのデータ作成から再開
    data: [
      {
        id: 'article-id-1',
        title: '草生えた物語',
        detail: '草生えるで',
        userId: takuaka.id,
      },
      {
        id: 'article-id-3',
        title: 'パオパオすきやねん',
        detail: '草草の草',
        userId: akasaka.id,
      },
      {
        id: 'article-id-4',
        title: '青学陸上部の闇を晒します',
        detail: '青学陸上の闇は~~~~~~',
        userId: takuami.id,
      },
      {
        id: 'article-id-5',
        title: 'えぐいてえ',
        detail: 'MY君の家なくしてみた',
        userId: takumi2.id,
      },
    ],
  });

  await prisma.follow.createMany({
    data: [
      {
        followeeId: 'user-id-2',
        followerId: 'user-id-1',
      },
      {
        followeeId: 'user-id-3',
        followerId: 'user-id-1',
      },
    ],
  });

  await prisma.user.update({
    data: {
      favoritedArticles: {
        connect: {
          id: 'article-id-3',
        },
      },
    },
    where: {
      id: 'user-id-1',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
