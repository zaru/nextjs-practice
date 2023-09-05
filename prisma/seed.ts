import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 10; i++) {
    await prisma.articles.upsert({
      where: { id: i },
      update: {
        title: `article title ${i}`,
        content: "content",
        published: true,
      },
      create: {
        title: `article title ${i}`,
        content: "content",
        published: true,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
