interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function FormField(props: Props) {
  return (
    <div className="mb-5" {...props}>
      {props.children}
    </div>
  );
}
