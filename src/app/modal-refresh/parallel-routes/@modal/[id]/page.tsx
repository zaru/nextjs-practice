import { Form } from "./Form";
import { prisma } from "@/lib/db/prisma";

interface Props {
  params: {
    id: string;
  };
}

export default async function Page(props: Props) {
  // MEMO: ここでOrThrowを使うと、削除後にレンダリングが発生した際に例外が発生してブラウザ側でエラーになるのでnullにしておく
  const todo = await prisma.todo.findUnique({
    where: { id: Number(props.params.id) },
  });

  if (!todo) return null;

  return (
    <div className="fixed left-0 right-0 top-10 z-10 m-auto w-fit rounded-lg border bg-white shadow">
      <Form todo={todo} />
    </div>
  );
}
