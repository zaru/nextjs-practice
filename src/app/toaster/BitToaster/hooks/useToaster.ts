import { useGlobalState } from "@/app/toaster/BitToaster/hooks/useGlobalState";

export function useToaster() {
  const { state, setGlobalState } = useGlobalState();

  const toast = (message: string) => {
    setGlobalState({ show: true, message: message });
    setTimeout(() => {
      setGlobalState({ show: false, message: "" });
    }, 1000);
  };

  return {
    state,
    toast,
  };
}
