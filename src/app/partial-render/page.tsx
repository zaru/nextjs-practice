import Item from "@/app/partial-render/components/item";

export type ItemType = {
  name: string;
};
export async function fetchData() {
  const json: ItemType[] = [
    { name: generateRandomString(10) },
    { name: "bar" },
  ];
  return json;
}

function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

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
