"use client";

import { createContext, useState } from "react";
import { createPortal } from "react-dom";
import Toaster from "@/app/toaster-context/components/Toaster";

export const ToasterContext = createContext((message: string) => {});

export default function ToasterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const toast = (message: string) => {
    setMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <ToasterContext.Provider value={toast}>
      {children}
      {createPortal(<Toaster show={show}>{message}</Toaster>, document.body)}
    </ToasterContext.Provider>
  );
}
