"use client";

import { InputForm } from "./InputForm/InputForm";
import { Modal, useModal } from "../../../_hooks/useModal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Form() {
  const router = useRouter();
  const { modalRef, openModal, closeModal } = useModal();

  useEffect(() => {
    openModal();
  }, [openModal]);

  const handleClose = () => {
    closeModal();
    router.back();
  };

  return (
    <div>
      <Modal modalRef={modalRef} onClose={handleClose}>
        <InputForm />
      </Modal>
    </div>
  );
}
