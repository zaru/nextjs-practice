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
      href: "/hierarchy/child",
      title: "階層レイアウトのシンプルなデモ",
    },
    {
      href: "/error-demo",
      title: "エラーデモ",
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
