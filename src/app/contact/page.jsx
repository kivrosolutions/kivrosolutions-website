import ContactHero from "@/components/contactpage/ContactHero";
import ScrollingTestimonials from "@/components/contactpage/ScrollingTestimonials";
import BeforeAfterComparison from "@/components/contactpage/BeforeAfterComparison";
import PipelineResults from "@/components/contactpage/PipelineResults";
import ChatGPTCTASection from "@/components/aboutpage/ChatGPTCTASection";

export const metadata = {
  title: "Contact Us - Kivro Solution",
  description: "Get in touch with Kivro Solutions. Book a free strategy session and transform your business.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero with Contact Form */}
      <ContactHero />

      {/* Scrolling Testimonials - 3 rows */}
      <ScrollingTestimonials />

      {/* Before/After Comparison */}
      <BeforeAfterComparison />

      {/* Pipeline Results - Horizontal Scroll */}
      <PipelineResults />

      {/* ChatGPT CTA (Already Built) */}
      <ChatGPTCTASection />
    </>
  );
}