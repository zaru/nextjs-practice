import Hero from "@/app/loading-demo/streaming/components/hero";
import Heavy from "@/app/loading-demo/streaming/components/heavy";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <p>streaming page</p>
      <Suspense fallback={<p>Loading hero...</p>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<p>Loading heavy...</p>}>
        <Heavy />
      </Suspense>
    </div>
  );
}
