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
      href: "/partial-render",
      title:
        "一覧で部分更新した際に、描画も変更するやつ（HotwireのTurboStreamsみたいなやつ）",
    },
    {
      href: "/loading-demo",
      title: "ローディング",
    },
    {
      href: "/loading-demo/streaming",
      title: "ストリーミング",
    },
    {
      href: "/prisma_crud/api",
      title: "Prisma CRUD デモ（通常API版）",
    },
    {
      href: "/prisma_crud/server_actions",
      title: "Prisma CRUD デモ（Server Actions版）",
    },
    {
      href: "/toaster",
      title: "Toaster（GlobalState版）",
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
