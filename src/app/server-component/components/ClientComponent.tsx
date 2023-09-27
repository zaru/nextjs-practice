"use client";

import ServerComponent from "@/app/server-component/components/ServerComponent";

export default function ClientComponent() {
  return (
    <div>
      <h1>ClientComponent</h1>
      <button type="button" onClick={() => alert("Hello!")}>
        Click me!
      </button>
      <ServerComponent />
    </div>
  );
}
