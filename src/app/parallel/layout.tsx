export default function Layout(props: {
  modal: React.ReactNode;
  modal2: React.ReactNode;
  children: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <>
      {props.modal}
      {props.modal2}
      {props.children}
      {props.analytics}
    </>
  );
}
