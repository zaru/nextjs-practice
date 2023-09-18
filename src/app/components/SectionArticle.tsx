export default function SectionArticle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="prose prose-slate mt-12 first:mt-0">{children}</section>
  );
}
