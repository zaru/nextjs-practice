import FileUploader from "@/app/server-actions-file-upload/components/FileUploader";
import FileDownloader from "@/app/server-actions-file-upload/components/FileDownloader";
import FileList from "@/app/server-actions-file-upload/components/FileList";

export default function Page() {
  return (
    <div className="mt-4 first:mt-0">
      <p className="mt-6 first:mt-0">
        Server Actionsのファイルアップロードデモ
      </p>
      <p className="mt-6 first:mt-0">
        GCP
        Storageにファイルをアップロードし、ダウンロードは一時的なURLを発行して行う。
      </p>
      <div className="mt-6">
        <FileUploader />
        <FileList />
      </div>
    </div>
  );
}
