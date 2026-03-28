import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import StatsSection from "@/components/StatsSection";
import FeedstockSection from "@/components/FeedstockSection";
import EngineeringSection from "@/components/EngineeringSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import YouTubeSection from "@/components/YouTubeSection";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * Primetech Infra and Energy - Main Landing Page
 */
const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Global Navigation */}
      <SiteNavbar />
      
      <main>
        {/* Hero: No ScrollReveal for immediate "First Paint" speed */}
        <HeroSection />

        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <WhyChooseUsSection />
        </ScrollReveal>

        {/* Stats: Features the counting numbers and full-width green layer */}
        <ScrollReveal delay={0.1}>
          <StatsSection />
        </ScrollReveal>

        {/* Detailed technical authority sections */}
        <ScrollReveal delay={0.1}>
          <FeedstockSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <EngineeringSection />
        </ScrollReveal>

        {/* Credibility and Social Proof */}
        <ScrollReveal delay={0.15}>
          <TestimonialsSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <YouTubeSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <CTASection />
        </ScrollReveal>
      </main>

      {/* Persistent Contact Element */}
      <WhatsAppButton />
      
      <SiteFooter /> 
    </div>
  );
};

export default Index;