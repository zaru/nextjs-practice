type Props = {
  children: React.ReactNode;
};

export default function List(props: Props) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {props.children}
    </ul>
  );
}
