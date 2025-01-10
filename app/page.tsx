import Hero from "@/components/Hero";
import { MyJourney } from "@/components/my-journey";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto bg-black-100 overflow-hidden">
      <div className="w-full">
        <Hero />
        <TechStack />
        <MyJourney />
      </div>
    </main>
  );
}
