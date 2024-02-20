"use client";

export function ClientError() {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          throw new Error("Client Error");
        }}
      >
        button
      </button>
    </div>
  );
}
