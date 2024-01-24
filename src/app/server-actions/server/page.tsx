import { create } from "@/app/server-actions/create";

export default function Page() {
  async function handleSubmit() {
    // これが必要
    // "use server";
    const result = await create();
    console.log(result);
  }

  return <form></form>;
}
