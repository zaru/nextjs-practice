"use client";

import { signedUrl } from "@/app/server-actions-file-upload/actions/signedUrl";

export default function FileDownloader() {
  const handleClick = async () => {
    const result = await signedUrl();
    console.log(result);
    if (result.success) {
      window.open(result.url, "_blank");
    }
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        download
      </button>
    </div>
  );
}
