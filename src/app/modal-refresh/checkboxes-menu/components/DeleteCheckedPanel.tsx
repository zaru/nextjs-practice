"use client";

import { deleteChecked } from "@/app/modal-refresh/checkboxes-menu/actions";
import { useRouter } from "next/navigation";

interface Props {
  setCheckedLists: (checkedLists: []) => void;
}

export function DeleteCheckedPanel(props: Props) {
  const router = useRouter();
  const handleDeleteChecked = async (formData: FormData) => {
    const result = await deleteChecked(formData);
    if (result.success) {
      props.setCheckedLists([]);
      router.refresh();
    }
  };

  return (
    <button
      type="submit"
      formAction={handleDeleteChecked}
      className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      チェックしたものをまとめて削除
    </button>
  );
}
