export default async function Heavy() {
  const result = await fetch("http://127.0.0.1:9999/?sleep=4");
  const json = await result.json();
  return (
    <div>
      <p>Heavy component</p>
      <p>Output: {json.message} </p>
    </div>
  );
}
