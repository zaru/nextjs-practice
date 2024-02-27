import { useModal } from "@/app/modal-refresh/client-modal-use-context/components/ModalContext";

interface Props {
  children: React.ReactNode;
}

export function Modal(props: Props) {
  const modalRef = useModal();

  return (
    <dialog
      ref={modalRef}
      className="relative rounded-lg bg-white shadow dark:bg-gray-700"
    >
      {props.children}
    </dialog>
  );
}
