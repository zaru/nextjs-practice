type Props = {
  params: {
    id: string;
  };
};
export default function Page(props: Props) {
  return (
    <div>
      <p>ID {props.params.id}</p>
    </div>
  );
}
