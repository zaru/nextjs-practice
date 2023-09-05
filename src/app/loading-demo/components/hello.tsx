export default async function Hello() {
  const result = await fetch(
    "https://run.mocky.io/v3/18660897-8009-47d0-88e5-b3253dd85457?mocky-delay=1000ms",
  );

  const json = await result.json().catch((e) => {
    console.error(e);
    return { title: "error" };
  });

  return <div>{json.title}</div>;
}
