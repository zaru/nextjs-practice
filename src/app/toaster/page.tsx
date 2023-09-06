"use client";

import { Toaster, useToaster } from "@/app/toaster/BitToaster";

export default function Page() {
  const { toast } = useToaster();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    toast(event.currentTarget.dataset.message ?? "ハロー");
  };
  return (
    <div>
      <p>page</p>
      <button type="button" onClick={handleClick} data-message="こんにちは">
        show
      </button>
      <button type="button" onClick={handleClick} data-message="さようなら">
        show
      </button>
      <button type="button" onClick={handleClick} data-message="また明日">
        show
      </button>
      <Toaster />
    </div>
  );
}
