import { Modal } from "@/app/modal-form-with-confirm/@modal/new/_components/Modal";
import { Form } from "@/app/modal-form-with-confirm/@modal/new/_components/Form";

export default function Page() {
  return (
    <div>
      <Modal>
        <div className="px-4 py-8">
          <Form />
        </div>
      </Modal>
    </div>
  );
}
