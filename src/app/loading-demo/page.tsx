import Hello from "@/app/loading-demo/components/hello";
type Props = {};

export default async function Page(props: Props) {
  return (
    <div>
      <p>Loading demo2</p>
      <div>
        Output: <Hello />
      </div>
    </div>
  );
}
