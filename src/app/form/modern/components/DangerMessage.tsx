interface Props {
  children: React.ReactNode;
}

export function DangerMessage(props: Props) {
  return (
    <div
      className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      {props.children}
    </div>
  );
}
