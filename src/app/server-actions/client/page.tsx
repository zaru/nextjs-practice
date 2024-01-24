"use client";

import { create } from "@/app/server-actions/create";

export default function Page() {
  async function handleSubmit() {
    const result = await create();
    console.log(result);
  }

  return <form action={handleSubmit}></form>;
}
