"use client";

import { useCallback, useEffect, useRef } from "react";

export function useModal() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const openModal = () => {
    modalRef.current?.showModal();
  };
  const closeModal = () => {
    modalRef.current?.close();
  };
  return { openModal, closeModal, modalRef };
}

interface Props {
  children: React.ReactNode;
  modalRef: React.RefObject<HTMLDialogElement>;
  onClose: () => void;
}

export function Modal(props: Props) {
  const handleEscKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        props.onClose();
      }
    },
    [props],
  );

  useEffect(() => {
    const currentModalRef = props.modalRef.current;
    if (currentModalRef) {
      currentModalRef.addEventListener("keydown", handleEscKey);
    }
    return () => {
      if (currentModalRef) {
        currentModalRef.removeEventListener("keydown", handleEscKey);
        currentModalRef.close(); // ここでちゃんとcloseしておかないと、再レンダリングでDialog要素が残り操作できなくなる
      }
    };
  }, [props.modalRef, handleEscKey]);

  return (
    <dialog ref={props.modalRef} className="rounded px-4 py-8">
      <div className="mx-auto max-w-md">
        <header className="flex items-center justify-between border-b">
          <h2 className="text-xl font-bold">Modal</h2>
          <button type="button" onClick={props.onClose}>
            [x]
          </button>
        </header>
        <main>{props.children}</main>
      </div>
    </dialog>
  );
}
