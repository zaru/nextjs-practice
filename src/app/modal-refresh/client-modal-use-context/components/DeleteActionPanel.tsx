"use client";

import { Modal } from "./Modal";
import { ModalProvider } from "./ModalContext";
import { Todo } from "@prisma/client";
import { DeleteForm } from "@/app/modal-refresh/client-modal-use-context/components/DeleteForm";
import { OpenDeleteModalButton } from "@/app/modal-refresh/client-modal-use-context/components/OpenDeleteModalButton";

interface Props {
  todo: Todo;
}

export function DeleteActionPanel(props: Props) {
  return (
    <ModalProvider>
      <div>
        <Modal>
          <DeleteForm todo={props.todo} />
        </Modal>
        <OpenDeleteModalButton />
      </div>
    </ModalProvider>
  );
}
