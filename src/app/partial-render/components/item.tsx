"use client";

import { fetchData, ItemType } from "@/app/partial-render/page";
import { useRouter } from "next/navigation";

type Props = {
  item: ItemType;
};

export default function Item(props: Props) {
  const router = useRouter();
  const onUpdateHandler = async () => {
    const data = await fetchData();
    console.log(data);
    router.refresh();
  };
  return (
    <p>
      {props.item.name}
      <button type="button" onClick={onUpdateHandler}>
        update
      </button>
    </p>
  );
}
