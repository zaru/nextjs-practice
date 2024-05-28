"use client";

import { ConfirmForm } from "./ConfirmForm/ConfirmForm";
import {
  Modal,
  useModal,
} from "@/app/modal-form-with-confirm-sessionStorage/_hooks/useModal";
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
        <ConfirmForm />
      </Modal>
    </div>
  );
}
