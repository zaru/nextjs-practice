export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <>
      {props.modal}
      {props.children}
      {props.analytics}
    </>
  );
}
