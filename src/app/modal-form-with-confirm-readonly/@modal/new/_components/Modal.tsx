"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export function Modal(props: Props) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleEscKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }
    },
    [router],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.showModal();
      dialog.addEventListener("keydown", handleEscKey);
    }
    return () => {
      if (dialog) {
        dialog.close();
        dialog.removeEventListener("keydown", handleEscKey);
      }
    };
  }, [dialogRef, handleEscKey]);

  return <dialog ref={dialogRef}>{props.children}</dialog>;
}
