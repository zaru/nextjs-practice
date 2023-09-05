"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function OrderSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const order = searchParams.get("order") || "desc";

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const order = event.currentTarget.value;
    router.push(`/prisma_crud/server_actions?order=${order}`);
  }
  return (
    <div>
      <select onChange={handleChange} defaultValue={order}>
        <option value="asc">作成日（昇順）</option>
        <option value="desc">作成日（降順）</option>
      </select>
    </div>
  );
}
