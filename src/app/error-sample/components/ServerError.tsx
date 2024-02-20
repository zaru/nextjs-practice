export async function ServerError() {
  const result = await fetch("https://example.com/");
  const data = await result.json();
  return <div>{data.foo}</div>;
}
