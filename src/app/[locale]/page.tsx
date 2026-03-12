import { Hero } from "@/components/sections/Hero";
import { AIChat } from "@/components/sections/AIChat";
import { About } from "@/components/sections/About";
import { IterationSummary } from "@/components/sections/IterationSummary";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { HonorsGallery } from "@/components/sections/HonorsGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <AIChat />
      <About />
      <IterationSummary />
      <ProjectGallery />
      <HonorsGallery />
    </>
  );
}
