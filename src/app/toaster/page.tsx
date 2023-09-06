"use client";

import { Toaster } from "@/app/toaster/BitToaster";
import { useToaster } from "@/app/toaster/BitToaster/hooks/useToaster";

export default function Page() {
  const { toast } = useToaster();
  const handleClick = () => {
    toast("こんにちは");
  };
  return (
    <div>
      <p>page</p>
      <button type="button" onClick={handleClick}>
        show
      </button>
      <Toaster />
    </div>
  );
}
