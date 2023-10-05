import Form from "@/app/deep-nested/edge-fetch/components/Form";
import { PrefecturesType } from "@/app/deep-nested/api";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export default function Modal(props: Props) {
  return (
    <div
      className={`top-5 z-10 w-1/3 border bg-white p-4 ${
        props.isOpen ? "absolute" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between border-b">
        Modal
        <button
          className="px-3 py-2 text-sm hover:bg-gray-100"
          type="button"
          onClick={props.onClose}
        >
          x
        </button>
      </div>
      <div className="mt-4">
        <Form />
      </div>
    </div>
  );
}
