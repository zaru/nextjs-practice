"use client";

import { Modal, useModal } from "@/app/modal-form-with-confirm/_hooks/useModal";
import { deleteItem } from "@/app/modal-form-with-confirm/_commands/deleteItem";

interface Props {
  item: number;
}
export function Item(props: Props) {
  const { modalRef, openModal, closeModal } = useModal();

  const handleDelete = async () => {
    await deleteItem(props.item);
    closeModal();
  };

  return (
    <div>
      No. {props.item}
      <button type="button" onClick={openModal}>
        削除する
      </button>
      <Modal modalRef={modalRef} onClose={closeModal}>
        <p>No. {props.item}を削除しますか？</p>
        <div>
          <button type="button" onClick={closeModal}>
            いいえ
          </button>
          <button type="button" onClick={handleDelete}>
            はい
          </button>
        </div>
      </Modal>
    </div>
  );
}
