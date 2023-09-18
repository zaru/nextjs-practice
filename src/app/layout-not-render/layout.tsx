import SlideAnimation from "./components/slide-animation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="rounded-xl border-2 border-sky-500 p-4">
        <p>再描画されないか確認するアニメーション</p>
        <SlideAnimation />
      </div>
      {children}
    </div>
  );
}
