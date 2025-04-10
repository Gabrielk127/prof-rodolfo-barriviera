"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CoursesSection from "@/components/sections/CoursesSection";
import TimelineSection from "@/components/sections/TimelineSection";
import TeamSection from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CTASection />
        <CoursesSection />
        <TimelineSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
