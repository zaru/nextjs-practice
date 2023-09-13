import { FileUpload } from "@/app/server-actions-file-upload/actions/fileUpload";

export default function FileUploader() {
  return (
    <form action={FileUpload}>
      <input type="file" name="file" />
      <button type="submit">アップロード</button>
    </form>
  );
}
