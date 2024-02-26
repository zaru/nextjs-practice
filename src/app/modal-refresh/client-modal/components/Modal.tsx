import { addItem } from "@/app/modal-refresh/client-modal/actions";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ToasterContext } from "@/app/toaster-context/toaster-provider";

interface Props {
  modalRef: React.RefObject<HTMLDialogElement>;
}

export default function Modal(props: Props) {
  const toast = useContext(ToasterContext);
  const router = useRouter();

  const handleSubmit = async () => {
    const result = await addItem();
    if (result.success) {
      props.modalRef.current?.close();
      toast("作成しました");
      router.refresh();
    } else {
      toast("失敗しました");
    }
  };

  return (
    <dialog
      ref={props.modalRef}
      className="relative rounded-lg bg-white shadow dark:bg-gray-700"
    >
      <form action={handleSubmit} className="px-10 py-5">
        <p>新規作成モーダル</p>
        <button
          type="submit"
          className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          作成
        </button>
      </form>
    </dialog>
  );
}
