export default function SectionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-4 py-5 sm:px-6">{children}</div>;
}
