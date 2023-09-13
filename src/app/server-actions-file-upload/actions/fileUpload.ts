"use server";

import { Storage } from "@google-cloud/storage";

export async function FileUpload(formData: FormData) {
  const file = formData.get("file") as File;
  if (file) {
    const data = await file.arrayBuffer();
    const buffer = Buffer.from(data);

    if (process.env.GCS_PRIVATE_KEY && process.env.GCS_CLIENT_EMAIL) {
      const storage = new Storage({
        credentials: {
          private_key: process.env.GCS_PRIVATE_KEY.split(String.raw`\n`).join(
            "\n",
          ),
          client_email: process.env.GCS_CLIENT_EMAIL,
        },
      });

      const bucket = storage.bucket("hrmap-zaru-local");
      const bucketFile = bucket.file(file.name);
      await bucketFile.save(buffer);
    }
  }
}
