// src/app/page.tsx (Main Home Page)

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="pt-28">
      <HeroSection />
      <AboutSection />
      <ToolsSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
