import Link from "next/link";
import { SuccessMessage } from "./_components/SuccessMessage";
import { List } from "@/app/modal-form-with-confirm-sessionStorage/_components/List";

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
          href="/modal-form-with-confirm-sessionStorage/new"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          新規登録
        </Link>
      </p>
      <div>
        <h2>登録済みデータ</h2>
        <List />
      </div>
    </div>
  );
}
