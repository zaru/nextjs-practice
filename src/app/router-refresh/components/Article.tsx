"use client";

import { ArticleType } from "@/app/router-refresh";
import { useRouter } from "next/navigation";

type Props = {
  article: ArticleType;
};

export default function Article(props: Props) {
  const router = useRouter();
  const handleUpdate = async () => {
    await fetch(`http://localhost:3000/api/articles/${props.article.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        published: props.article.published ? 0 : 1,
      }),
    });
    router.refresh();
  };
  return (
    <div
      className={`mt-4 p-4 ${
        props.article.published ? "bg-sky-50" : "bg-gray-50"
      }`}
    >
      <div className="flex justify-between gap-2">
        <div>
          <p className="mt-2">Title: {props.article.title}</p>
          <p className="mt-2">Content: {props.article.content}</p>
        </div>
        <button
          type="button"
          onClick={handleUpdate}
          className="border bg-white px-3 py-2 text-sm"
        >
          {props.article.published ? "非公開にする" : "公開にする"}
        </button>
      </div>
    </div>
  );
}
