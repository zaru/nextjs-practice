import SlideAnimation from "./components/slide-animation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SlideAnimation />
      {children}
    </>
  );
}
