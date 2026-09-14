import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveAgentDemo } from './components/InteractiveAgentDemo';
import { WebsiteServiceSection } from './components/WebsiteServiceSection';
import { AiAgentSection } from './components/AiAgentSection';
import { MultiChannelVisual } from './components/MultiChannelVisual';
import { PreviewBeforeLaunch } from './components/PreviewBeforeLaunch';
import { HowItWorks } from './components/HowItWorks';
import { ServicesGrid } from './components/ServicesGrid';
import { WhoWeHelp } from './components/WhoWeHelp';
import { WhyUpperAgent } from './components/WhyUpperAgent';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050507] text-[#e2e8f0] selection:bg-cyan-500 selection:text-black relative">
      {/* Global Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Important Interactive Visual Demo (Website with Embedded Agent) */}
        <InteractiveAgentDemo />

        {/* 3. Website Building & Modernization Service Section */}
        <WebsiteServiceSection />

        {/* 4. Business AI Agent Service Section */}
        <AiAgentSection />

        {/* 5. Multi-Channel Unified Architecture Visual (Web, WhatsApp, Telegram) */}
        <MultiChannelVisual />

        {/* 6. Preview Before Final Delivery Guarantee */}
        <PreviewBeforeLaunch />

        {/* 7. How It Works (5-Step Process) */}
        <HowItWorks />

        {/* 8. Full Services Grid */}
        <ServicesGrid />

        {/* 9. Who We Help (Industry Solutions) */}
        <WhoWeHelp />

        {/* 10. Why Upper Agent (Trust & Pillars) */}
        <WhyUpperAgent />

        {/* 11. Portfolio Concepts & Interactive Mockup Viewer */}
        <PortfolioSection />

        {/* 12. Final Call to Action & Direct Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Always Accessible Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
