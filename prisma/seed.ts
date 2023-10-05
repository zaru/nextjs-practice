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

  for (let i = 1; i <= 10; i++) {
    await prisma.todo.upsert({
      where: { id: i },
      update: {
        name: `task ${i}`,
        isCompleted: false,
      },
      create: {
        name: `task ${i}`,
        isCompleted: false,
      },
    });
  }

  //都道府県をテーブルに保存する
  const prefectures = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ];
  for (let i = 0; i < prefectures.length; i++) {
    await prisma.prefecture.upsert({
      where: { id: i + 1 },
      update: {
        name: prefectures[i],
      },
      create: {
        name: prefectures[i],
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
