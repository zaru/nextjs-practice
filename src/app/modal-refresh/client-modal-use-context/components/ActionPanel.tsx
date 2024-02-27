"use client";

import { Modal } from "@/app/modal-refresh/client-modal-use-context/components/Modal";
import { NewForm } from "@/app/modal-refresh/client-modal-use-context/components/NewForm";
import { ModalProvider, useModal } from "./ModalContext";
import { OpenNewModalButton } from "@/app/modal-refresh/client-modal-use-context/components/OpenNewModalButton";

export function ActionPanel() {
  return (
    <ModalProvider>
      <div>
        <Modal>
          <NewForm />
        </Modal>
        <OpenNewModalButton />
      </div>
    </ModalProvider>
  );
}
