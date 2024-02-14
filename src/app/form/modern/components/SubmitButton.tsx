import { useFormStatus } from "react-dom";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  clientSideInvalid?: boolean;
}

export function SubmitButton(props: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || props.clientSideInvalid}
      aria-disabled={pending || props.clientSideInvalid}
      className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-30 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      {...props}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
