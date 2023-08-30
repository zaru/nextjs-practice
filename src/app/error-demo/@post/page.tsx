export default async function Page() {
  // MEMO: 必ずJSON取得失敗するAPI
  const result = await fetch(
    "https://run.mocky.io/v3/f0999613-dc13-42a3-876e-e599750d5df8",
  );
  const json = await result.json();
  return <p>{json.title}</p>;
}
