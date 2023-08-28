import Title from "@/app/req-memo/components/title";
import Detail from "@/app/req-memo/components/detail";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>
        fetch は React がメモ化してくれるので重複していても効率よくやってくれる
      </p>
      <Link href="https://nextjs.org/docs/app/building-your-application/caching#request-memoization">
        Request Memoization
      </Link>
      <Title />
      <Detail />
    </div>
  );
}
