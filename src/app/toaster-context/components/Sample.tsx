"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/toaster-context/theme-provider";

export default function Sample() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>sample</p>
      <p>{theme}</p>
    </div>
  );
}
