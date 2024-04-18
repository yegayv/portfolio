import { AppFooter } from "@/components/app-footer";
import { AppNavigation } from "@/components/app-navigation";
import { FloatingNav } from "@/components/ui/floating-navbar";
import SwitchMode from "@/components/ui/switch-mode";
import { TypewriterEffectSmoothDemo } from "@/components/ui/typewriter-demo";

export default function Home() {
  const navItems = [
    {
      name: "Projects",
      link: "/projects",
      icon: <p>Text</p>, // Replace with your icon component for Projects
    },
    {
      name: "About",
      link: "/about",
      icon: <p>Text</p>, // Replace with your icon component for About
    },
  ];

  return (
    <main className="gap-3">
      <AppNavigation />
      <SwitchMode />
      <FloatingNav navItems={navItems} />
      <div className="flex flex-col gap-3 items-center h-full min-h-screen mt-4 ">
        {/* <HeroSection/> */}
        <div className="relative antialiased overflow-hidden bg-black/30 px-12 rounded w-full">
          <TypewriterEffectSmoothDemo />
        </div>
      </div>
      <AppFooter />
    </main>
  );
}
