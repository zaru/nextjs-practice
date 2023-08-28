export default async function Detail() {
  const result = await fetch("http://localhost:9999/product.php");
  const json = await result.json();
  return (
    <div>
      <dl>
        <dt>説明</dt>
        <dd>{json.description}</dd>
        <dt>価格</dt>
        <dd>{json.price}</dd>
      </dl>
    </div>
  );
}
