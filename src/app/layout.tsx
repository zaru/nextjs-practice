import "./globals.css";
import RootToaster from "@/app/components/RootToaster";
import Sidebar from "@/app/components/Sidebar";

// MEMO: 明示的にdynamicにしておく。ローカル開発時にfetchがあってもstatic扱いになるため
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full bg-gray-50">
      <body className="h-full">
        <RootToaster />
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <Sidebar />
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
