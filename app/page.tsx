import Hero from "@/components/Hero";
import { MyJourney } from "@/components/my-journey";
import OtherInterests from "@/components/other-interests";
import TechStack from "@/components/tech-stack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto bg-black-100 overflow-hidden">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <TechStack />
        <MyJourney />
        <OtherInterests />
      </div>
    </main>
  );
}
