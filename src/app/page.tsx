import Link from "next/link";
import ListItem from "@/app/components/ListItem";
import List from "@/app/components/List";

export default function Home() {
  const items = [
    {
      href: "/req-memo",
      title: "fetch リクエストメモ化",
    },
    {
      href: "/layout-not-render",
      title: "レイアウトの部分更新",
    },
    {
      href: "/hierarchy",
      title: "階層",
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
