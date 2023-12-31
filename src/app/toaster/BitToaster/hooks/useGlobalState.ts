import { useEffect, useState } from "react";

const listeners = new Set<Function>();

export type GlobalStateType = {
  show: boolean;
  message: string;
};
let globalState: GlobalStateType = {
  show: false,
  message: "",
};

export const useGlobalState = () => {
  const [state, setState] = useState(globalState);
  useEffect(() => {
    const listener = () => {
      setState(globalState);
    };
    listeners.add(listener);
    listener();
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const setGlobalState = (nextGlobalState: GlobalStateType) => {
    globalState = nextGlobalState;
    listeners.forEach((listener) => listener());
  };

  return { state, setGlobalState };
};
