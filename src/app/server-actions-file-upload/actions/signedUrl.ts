"use server";

import { GetSignedUrlConfig, Storage } from "@google-cloud/storage";

export async function signedUrl() {
  console.log(process.env.GCS_BUCKET_NAME);
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

    const options: GetSignedUrlConfig = {
      version: "v4",
      action: "read",
      expires: Date.now() + 15 * 60 * 1000,
    };

    const [url] = await storage
      .bucket(process.env.GCS_BUCKET_NAME)
      .file("b_npm.gif")
      .getSignedUrl(options);
    return {
      success: true,
      url,
    };
  }
  return {
    success: false,
  };
}
