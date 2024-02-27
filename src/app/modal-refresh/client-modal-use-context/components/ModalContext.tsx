import { createContext, useContext, useRef } from "react";

const ModalContext = createContext<React.RefObject<HTMLDialogElement> | null>(
  null,
);

export const useModal = () => useContext(ModalContext);

interface Props {
  children: React.ReactNode;
}

export const ModalProvider = (props: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <ModalContext.Provider value={modalRef}>
      {props.children}
    </ModalContext.Provider>
  );
};
