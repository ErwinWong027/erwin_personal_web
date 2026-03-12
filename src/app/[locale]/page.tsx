import { Hero } from "@/components/sections/Hero";
import { AIChat } from "@/components/sections/AIChat";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Gallery } from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <AIChat />
      <About />
      <Projects />
      <Gallery />
    </>
  );
}
