"use server";

import { PrefecturesType } from "@/app/deep-nested/api";

export default async function PrefectureOptions() {
  // 本来は環境変数でURLを生成する必要がある, このケースの場合fetchでなくPrisma直接でも良い
  const result = await fetch("http://localhost:3000/deep-nested/api");
  const { prefectures }: { prefectures: PrefecturesType } = await result.json();
  return (
    <>
      {prefectures.map((prefecture) => (
        <option key={prefecture.name}>{prefecture.name}</option>
      ))}
    </>
  );
}
