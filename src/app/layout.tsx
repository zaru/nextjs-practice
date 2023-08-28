import "./globals.css";

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <p>Root layout</p>
        {children}
      </body>
    </html>
  );
}
