export default async function Hello() {
  const result = await fetch("https://dummyjson.com/products/1");
  const json = await result.json().catch((e) => {
    console.error(e);
    return { title: "error" };
  });
  return <div>{json.title}</div>;
}
