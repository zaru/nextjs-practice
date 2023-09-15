"use client";

import { signedUrl } from "@/app/server-actions-file-upload/actions/signedUrl";

type Props = {
  gcsPath: string;
  name: string;
};
export default function FileDownloader(props: Props) {
  const handleClick = async () => {
    const result = await signedUrl(props.name, props.gcsPath);
    console.log(result);
    if (result.success) {
      window.open(result.url, "_blank");
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="rounded border p-2"
      >
        download
      </button>
    </div>
  );
}
