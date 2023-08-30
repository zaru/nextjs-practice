import { ArticleType } from "@/app/router-refresh";
import Article from "@/app/router-refresh/components/Article";
import SlideAnimation from "@/app/layout-not-render/components/slide-animation";

export default async function Articles() {
  const response = await fetch("http://localhost:3000/api/articles");
  const articles: ArticleType[] = await response.json();

  if (!articles) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-col gap-6">
      <div className="border-2 p-2">
        <p>再描画されないか確認するアニメーション</p>
        <SlideAnimation />
      </div>
      {articles.map((article: any) => (
        <Article article={article} key={article.id} />
      ))}
    </div>
  );
}
