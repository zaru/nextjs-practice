interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label(props: Props) {
  return (
    <label
      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      {...props}
    >
      {props.children}
    </label>
  );
}
