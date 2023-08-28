export default async function Page() {
  const result = await fetch("http://example.com");
  return (
    <div>
      <p>Error demo</p>
    </div>
  );
}
