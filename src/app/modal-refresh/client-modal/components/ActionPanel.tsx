"use client";
import Modal from "@/app/modal-refresh/client-modal/components/Modal";
import { useRef } from "react";

export function ActionPanel() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const handleOpenModal = () => {
    modalRef?.current?.showModal();
  };
  return (
    <div>
      <Modal modalRef={modalRef} />
      <button
        type="button"
        onClick={handleOpenModal}
        className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        新規作成
      </button>
    </div>
  );
}
