import Nav from "@/app/deep-nested/components/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <div className="mt-4">{children}</div>
    </div>
  );
}
