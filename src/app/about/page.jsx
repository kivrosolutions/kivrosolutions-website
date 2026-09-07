import HeroStatsSection from "@/components/aboutpage/HeroStatsSection";
import OurMissionSection from "@/components/aboutpage/OurMissionSection";
import OurValuesSection from "@/components/aboutpage/OurValuesSection";
import ProblemEffectSolution from "@/components/aboutpage/ProblemEffectSolution";
import ChatGPTCTASection from "@/components/aboutpage/ChatGPTCTASection";
import TestimonialsCarousel from "@/components/aboutpage/TestimonialsCarousel";

export default function AboutPage() {
  return (
    <>
      <HeroStatsSection />
      <OurMissionSection />
      <OurValuesSection />
      <ProblemEffectSolution />
      <ChatGPTCTASection />
      <TestimonialsCarousel />
    </>
  );
}