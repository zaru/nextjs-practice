export default async function Page() {
  // 動作確認のためにランダムに成功と失敗を切り替える
  const url = [
    "https://run.mocky.io/v3/18660897-8009-47d0-88e5-b3253dd85457?mocky-delay=1000ms", // 成功するAPI
    "https://run.mocky.io/v3/f0999613-dc13-42a3-876e-e599750d5df8?mocky-delay=1000ms", // 失敗するAPI
  ];
  // MEMO: 必ずJSON取得失敗するAPI
  const result = await fetch(url[Math.floor(Math.random() * url.length)]);
  const json = await result.json();
  return <p>{json.title}</p>;
}
