"use server";

import { FormStateType } from "@/app/form-handle/use-form-xxx/index";

// experimentalなuseFormState hookを使うと、メッセージのやり取りをリアクティブにやれるようになる
export default async function createAction(
  prevState: FormStateType,
  formData: FormData,
): Promise<FormStateType> {
  console.log(prevState); // 前に渡したStateが入ってくる・これを活用したユースケースはまだ思いつかない

  // 以降は普通のServer Actions
  const data = Object.fromEntries(formData.entries());
  console.log(JSON.stringify(data));
  return {
    message: "success",
    foo: "ffooooo",
  };
}
