import { PrefecturesType } from "@/app/deep-nested/api";
import Form from "@/app/deep-nested/intercepting/[id]/form/components/Form";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page(props: Props) {
  const result = await fetch("http://localhost:3000/deep-nested/api");
  const { prefectures }: { prefectures: PrefecturesType } = await result.json();
  return (
    <div>
      <div>[id {props.params.id}] form</div>
      <Form prefectures={prefectures} />
    </div>
  );
}
