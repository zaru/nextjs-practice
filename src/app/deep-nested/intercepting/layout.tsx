// Parallel Routes + Intercepting Routesで必要なファイル
// これがないと複数のコンテンツを同時に表示することができない
// Propsのdrawerはファイルパスの /@drawer/ と同じ
export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
}
