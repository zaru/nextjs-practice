interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {}

export function FormField(props: Props) {
  return (
    <div className="mb-5" {...props}>
      {props.children}
    </div>
  );
}
