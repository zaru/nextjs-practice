interface Props {
  params: {
    id: string;
  };
}
export default function Page(props: Props) {
  return <h1>subdomain = {props.params.id}</h1>;
}
