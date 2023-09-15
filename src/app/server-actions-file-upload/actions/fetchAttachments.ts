import { prisma } from "@/lib/db/prisma";

export default function fetchAttachments() {
  return prisma.attachement.findMany();
}
