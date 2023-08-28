import { BeakerIcon } from "@heroicons/react/24/solid";

export default function SlideAnimation() {
  // 左右にスライドするアニメーションコンポーネント

  return (
    <div className="m-5">
      <div className="animate-bounce">Slide animation</div>
      <div>
        <BeakerIcon className="h-6 w-6 animate-ping text-blue-500" />
      </div>
    </div>
  );
}
