import Link from "next/link";
import { SuccessMessage } from "./_components/SuccessMessage";

interface Props {
  searchParams: {
    success: string;
  };
}

export default function Page(props: Props) {
  return (
    <div>
      {props.searchParams.success === "true" && <SuccessMessage />}
      <p>
        <Link
          href="/modal-form-with-confirm/new"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          新規登録
        </Link>
      </p>
    </div>
  );
}
