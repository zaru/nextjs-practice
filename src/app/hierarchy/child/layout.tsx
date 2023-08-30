export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-lg text-base leading-7 text-gray-700">
      <div className="mt-4">
        <div className="border-2 bg-sky-100 p-2">
          <p className="text-lg font-bold">/hierarchy/child/layout</p>
          {children}
        </div>
      </div>
    </div>
  );
}
