import React from "react";

export default function Layout(props: {
  children: React.ReactNode;
  post: React.ReactNode;
}) {
  return (
    <div className="max-w-lg text-base leading-7 text-gray-700">
      <div className="mt-4">
        <div className="border-2 bg-gray-100 p-2">{props.children}</div>
        <div className="mt-6 border-2 bg-gray-100 p-2 first:mt-0">
          <p className="mt-6 first:mt-0">
            これは、Parallel
            Routesを使って@post/page.tsxをレンダリングしている。
          </p>
          <p className="mt-6 first:mt-0">
            50%の確率でこのコンポーネントはエラーを発生させる。
          </p>
          {props.post}
        </div>
      </div>
    </div>
  );
}
