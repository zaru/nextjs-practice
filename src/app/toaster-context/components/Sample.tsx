"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/toaster-context/theme-provider";
import { ToasterContext } from "@/app/toaster-context/toaster-provider";

export default function Sample() {
  const theme = useContext(ThemeContext);
  const toast = useContext(ToasterContext);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    toast(event.currentTarget.dataset.message ?? "ハロー");
  };
  return (
    <div>
      <p>sample</p>
      <p>{theme}</p>
      <button onClick={handleClick}>show</button>
    </div>
  );
}
