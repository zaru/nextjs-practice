import SlideAnimation from "./components/slide-animation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-lg text-base leading-7 text-gray-700">
      <div className="mt-4">
        <div className="border-2 p-2">
          <p>再描画されないか確認するアニメーション</p>
          <SlideAnimation />
        </div>
        {children}
      </div>
    </div>
  );
}
