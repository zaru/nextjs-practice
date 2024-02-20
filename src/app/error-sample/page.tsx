import { ClientError } from "@/app/error-sample/components/ClientError";
import { ServerError } from "@/app/error-sample/components/ServerError";
import { errorSubmit } from "@/app/error-sample/errorSubmit";

export default function Page() {
  return (
    <div>
      page
      <div>
        <ServerError />
        <ClientError />
        <form action={errorSubmit}>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
