export default async function Title() {
  const result = await fetch("http://localhost:9999/product.php");
  const json = await result.json();
  return (
    <div>
      <h1>{json.title}</h1>
    </div>
  );
}
