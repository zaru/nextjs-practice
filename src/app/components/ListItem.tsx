type Props = {
  children: React.ReactNode;
};
export default function ListItem(props: Props) {
  return (
    <li className="flex items-center justify-between gap-x-6 py-5">
      {props.children}
    </li>
  );
}
