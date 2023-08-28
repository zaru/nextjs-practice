export default async function Hero() {
  const result = await fetch("http://127.0.0.1:9999/");
  const json = await result.json();
  return (
    <div>
      <p>Hero component</p>
      <p>Output: {json.message} </p>
    </div>
  );
}
