"use client";

import { Toaster } from "@/app/toaster/BitToaster";
import {
  GlobalStateType,
  useGlobalState,
} from "@/app/toaster/BitToaster/hooks/useGlobalState";

export default function Page() {
  const { state, setGlobalState } = useGlobalState();
  const handleClick = () => {
    const state: GlobalStateType = {
      show: true,
      message: "こんにちは",
    };
    setGlobalState(state);
  };
  return (
    <div>
      <p>page</p>
      <button type="button" onClick={handleClick}>
        show
      </button>
      <p>{state.show}</p>
      <p>{state.message}</p>
      <Toaster />
    </div>
  );
}
