import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const takuaka = await prisma.user.create({
    data: {
      id: 'user-id-1',
      name: 'サカス',
      email: 'example.com',
      description: '私の名前はサカスです',
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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
