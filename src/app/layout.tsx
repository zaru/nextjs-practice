import "./globals.css";

// MEMO: 明示的にdynamicにしておく。ローカル開発時にfetchがあってもstatic扱いになるため
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <main className="mx-auto max-w-7xl px-8">{children}</main>
      </body>
    </html>
  );
}
