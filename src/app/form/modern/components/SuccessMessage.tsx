interface Props {
  children: React.ReactNode;
}

export function SuccessMessage(props: Props) {
  return (
    <div
      className="mb-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      {props.children}
    </div>
  );
}
