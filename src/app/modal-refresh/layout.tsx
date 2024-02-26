import ToasterProvider from "@/app/toaster-context/toaster-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToasterProvider>{children}</ToasterProvider>;
}
