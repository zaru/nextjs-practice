import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function AddSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={pending ? "bg-amber-400" : "bg-sky-300"}
      disabled={pending}
    >
      {pending ? "登録中" : "登録"}
    </button>
  );
}
