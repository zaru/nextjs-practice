import { Item } from "@/app/modal-form-with-confirm-readonly/_components/Item";

export function List() {
  const items = [1, 2, 3, 4, 5];

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
}
