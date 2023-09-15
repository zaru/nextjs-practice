import fetchAttachments from "@/app/server-actions-file-upload/actions/fetchAttachments";
import FileDownloader from "@/app/server-actions-file-upload/components/FileDownloader";

export default async function FileList() {
  const attachments = await fetchAttachments();
  return (
    <ul>
      {attachments.map((attachment) => (
        <li key={attachment.id} className="flex items-center gap-2">
          {attachment.name}

          <FileDownloader
            name={attachment.name}
            gcsPath={attachment.gcs_path}
          />
        </li>
      ))}
    </ul>
  );
}
