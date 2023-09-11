import Link from "next/link";
import ListItem from "@/app/components/ListItem";
import List from "@/app/components/List";

export default function Home() {
  const items = [
    {
      href: "/req-memo",
      title: "fetchリクエストは同じであれば自動でメモ化する",
    },
    {
      href: "/layout-not-render",
      title: "画面遷移してもレイアウトは再描画されない",
    },
    {
      href: "/router-refresh",
      title:
        "データ更新後に、画面全体ではなく差分のみ再描画してくれる router.refresh()",
    },
    {
      href: "/hierarchy/child",
      title: "階層レイアウトのシンプルなデモ",
    },
    {
      href: "/error-demo",
      title:
        "コンポーネントがエラーになった際に、そこだけエラーハンドリングする",
    },
    {
      href: "/loading-demo",
      title: "loading.tsxを使ったローディング",
    },
    {
      href: "/loading-demo/streaming",
      title: "<Suspense>を使ったストリーミング",
    },
    {
      href: "/prisma_crud/api",
      title: "[未実装] Prisma CRUD デモ（通常API版）",
    },
    {
      href: "/prisma_crud/server_actions",
      title: "Prisma CRUD デモ（Server Actions版）",
    },
    {
      href: "/toaster",
      title: "Toaster（GlobalState版）",
    },
    {
      href: "/toaster-context",
      title: "Toaster（Context版）",
    },
    {
      href: "/zod",
      title: "Zod + Server Actionsのバリデーションデモ",
    },
  ];
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.href}>
          <Link href={item.href} className="text-blue-600">
            {item.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
