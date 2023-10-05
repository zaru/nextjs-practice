"use client";

import Modal from "@/app/deep-nested/edge-fetch/components/Modal";
import { useState } from "react";
import { PrefecturesType } from "@/app/deep-nested/api";

type Props = {};

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
      <Modal isOpen={isOpen} onClose={closeHandle} />
    </div>
  );
}
