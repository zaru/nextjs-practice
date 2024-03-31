import { prisma } from "@/lib/db/prisma";
import { DeleteActionPanel } from "@/app/modal-refresh/client-modal-use-context/components/DeleteActionPanel";

interface Props {
  id: number;
}

export async function DeleteActionButton(props: Props) {
  const todo = await prisma.todo.findUnique({ where: { id: props.id } });
  if (!todo) return <div>noting...</div>;

  return <DeleteActionPanel todo={todo} />;
}
