import Item from "@/app/partial-render/components/item";
import { fetchData } from "@/app/partial-render/fetchData";

export default async function Page() {
  const data = await fetchData();

  return (
    <div>
      {data.map((item) => {
        return <Item key={item.name} item={item} />;
      })}
    </div>
  );
}
