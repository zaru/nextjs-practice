"use client";

import { useFormState } from "react-dom";
import { confirm } from "../_commands/form";
import { ConfirmForm } from "./ConfirmForm/ConfirmForm";
import { InputForm } from "./InputForm/InputForm";
import { Modal, useModal } from "@/app/modal-form-with-confirm/_hooks/useModal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Form() {
  const router = useRouter();
  const [result, dispatch] = useFormState(confirm, null);
  const [edit, setEdit] = useState(true);
  const { modalRef, openModal, closeModal } = useModal();

  useEffect(() => {
    if (result?.valid) {
      setEdit(false);
    }
  }, [result]);

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
        {edit ? (
          <InputForm result={result} dispatch={dispatch} />
        ) : (
          <ConfirmForm result={result} setEdit={setEdit} />
        )}
      </Modal>
    </div>
  );
}
