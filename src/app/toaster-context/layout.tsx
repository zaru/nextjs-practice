import ThemeProvider from "@/app/toaster-context/theme-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
