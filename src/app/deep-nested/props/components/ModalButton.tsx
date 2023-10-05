"use client";

import Modal from "@/app/deep-nested/props/components/Modal";
import { useState } from "react";
import { PrefecturesType } from "@/app/deep-nested/api";

type Props = {
  prefectures: PrefecturesType;
};

export default function ModalButton(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  function closeHandle() {
    setIsOpen(false);
  }
  function openHandle() {
    setIsOpen(true);
  }

  return (
    <div>
      <button
        className="border bg-gray-50 px-3 py-2 text-sm"
        type="button"
        onClick={openHandle}
      >
        open modal
      </button>
      <Modal
        prefectures={props.prefectures}
        isOpen={isOpen}
        onClose={closeHandle}
      />
    </div>
  );
}
