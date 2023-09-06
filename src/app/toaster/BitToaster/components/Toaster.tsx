import { useGlobalState } from "@/app/toaster/BitToaster/hooks/useGlobalState";

export function Toaster() {
  const { state } = useGlobalState();
  return (
    <div
      className={`fixed left-0 right-0 z-10 mx-auto w-96 rounded border bg-gray-50 shadow transition-all ease-in ${
        state.show ? "top-5 opacity-100" : "top-0 opacity-0"
      }`}
    >
      <div className="flex justify-between gap-4 p-4">
        <p>{state.message}</p>
      </div>
    </div>
  );
}
