export default async function Hero() {
  const result = await fetch(
    "https://run.mocky.io/v3/18660897-8009-47d0-88e5-b3253dd85457",
  );
  const json = await result.json();
  return (
    <div>
      <p>Output: {json.title} </p>
    </div>
  );
}
