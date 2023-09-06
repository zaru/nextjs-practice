import ThemeProvider from "@/app/toaster-context/theme-provider";
import ToasterProvider from "@/app/toaster-context/toaster-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ToasterProvider>{children}</ToasterProvider>
    </ThemeProvider>
  );
}
