import React from "react";

export default function Layout(props: {
  children: React.ReactNode;
  post: React.ReactNode;
}) {
  return (
    <div className="max-w-lg text-base leading-7 text-gray-700">
      <div className="mt-4">
        <div className="border-2 bg-gray-100 p-2">
          <p>通常のpage.tsxのレンダリング</p>
          {props.children}
        </div>
        <div className="mt-6 border-2 bg-gray-100 p-2">
          <p>Parallel Routesの@post/page.tsxのレンダリング</p>
          {props.post}
        </div>
      </div>
    </div>
  );
}
