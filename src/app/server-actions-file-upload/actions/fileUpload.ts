"use server";

import { Storage } from "@google-cloud/storage";
import { prisma } from "@/lib/db/prisma";

function createPath() {
  return crypto.randomUUID();
}

export async function FileUpload(formData: FormData) {
  const file = formData.get("file") as File;
  if (file) {
    const data = await file.arrayBuffer();
    const buffer = Buffer.from(data);

    if (
      process.env.GCS_PRIVATE_KEY &&
      process.env.GCS_CLIENT_EMAIL &&
      process.env.GCS_BUCKET_NAME
    ) {
      const storage = new Storage({
        credentials: {
          private_key: process.env.GCS_PRIVATE_KEY.split(String.raw`\n`).join(
            "\n",
          ),
          client_email: process.env.GCS_CLIENT_EMAIL,
        },
      });

      const fileData = {
        name: file.name,
        gcs_path: createPath(),
        size: file.size,
        mime_type: file.type,
      };

      const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);
      const bucketFile = bucket.file(fileData.gcs_path);
      await bucketFile.save(buffer);
      await prisma.attachement.create({
        data: fileData,
      });
    }
  }
}
