"use client";

import { Toaster, useToaster } from "@/app/toaster/BitToaster";

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
