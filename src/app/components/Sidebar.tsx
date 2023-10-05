import Image from "next/image";
import SidebarMenuItem from "@/app/components/SidebarMenuItem";

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
    title: "コンポーネントがエラーになった際に、そこだけエラーハンドリングする",
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
  {
    href: "/server-actions-file-upload",
    title: "Server Actions + GCP Storageファイルアップロード・ダウンロードデモ",
  },
  {
    href: "/form-handle/use-state",
    title: "フォーム実装 - useStateパターン",
  },
  {
    href: "/form-handle/use-form-xxx",
    title: "フォーム実装 - useFormState / useFormStatusパターン",
  },
  {
    href: "/server-component",
    title: "Client Componentの中からServer Component",
  },
  {
    href: "/deep-nested/props",
    title: "ネストが深いコンポーネントの末端にデータを渡す方法 - propsパターン",
  },
];
export default function Sidebar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div className="flex h-16 shrink-0 items-center">
        <Image
          className="h-8 w-auto"
          width="394"
          height="80"
          src="/next.svg"
          alt="Next.js practice"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {items.map((item) => (
                <SidebarMenuItem item={item} key={item.title} />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
