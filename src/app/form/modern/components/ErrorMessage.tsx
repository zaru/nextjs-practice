interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function ErrorMessage(props: Props) {
  return (
    <div className="text-sm text-red-600 dark:text-red-400" {...props}>
      {props.children}
    </div>
  );
}
