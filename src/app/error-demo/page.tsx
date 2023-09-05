export default async function Page() {
  return (
    <div className="mt-4 first:mt-0">
      <p className="mt-6 first:mt-0">エラーハンドリングのデモ。</p>
      <p className="mt-6 first:mt-0">
        エラーが発生しても、ページ全体をエラーにはせずに、エラーが発生したコンポーネントだけをエラーハンドリングして、専用の描画に切り替えることができる。
      </p>
    </div>
  );
}
