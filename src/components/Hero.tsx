import React from 'react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/content';
import { Logo, LogoEmblem } from './Logo';
import { ArrowRight, MessageCircle, Globe, ShieldCheck, Sparkles, CheckCircle2, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#050507]"
    >
      {/* Precision Dark Lighting - True Matte Black Canvas with subtle dual-tone accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle warm copper glow top-right (from compass ring) */}
        <div className="absolute -top-[20%] right-[10%] w-[550px] h-[450px] bg-[#d99b73]/8 rounded-full blur-[140px]" />
        {/* Small cyan glow bottom-left (from skyscraper / needle facet) */}
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[400px] bg-cyan-500/6 rounded-full blur-[140px]" />
        
        {/* Carbon micro-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#a1a1aa 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Trust Pill Badge with small cyan accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e0e13] border border-zinc-800 text-slate-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 -ml-4" />
              <span className="text-slate-300">
                Official Agency &bull; Websites &amp; 24/7 Intelligent Agents
              </span>
            </div>

            {/* Headline with 3D Brushed Silver finish matching the logo lettering */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6">
              Build Better.{' '}
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Connect Smarter.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              <span className="text-white font-bold">Builder Agent</span> crafts high-performance,
              mobile-optimized websites and embeds 24/7 intelligent customer agents that answer inquiries,
              take orders, and connect seamlessly across{' '}
              <span className="text-cyan-400 font-semibold">Web</span>,{' '}
              <span className="text-[#d99b73] font-semibold">WhatsApp</span>, and{' '}
              <span className="text-slate-200 font-semibold">Telegram</span>.
            </p>

            {/* Fast Value Bullets with symmetrical padding */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0 mb-9 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5 p-2.5 sm:p-0 rounded-xl sm:rounded-none bg-[#0c0c12]/60 sm:bg-transparent border border-zinc-800/80 sm:border-0 text-left">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Custom mobile-first website design</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 sm:p-0 rounded-xl sm:rounded-none bg-[#0c0c12]/60 sm:bg-transparent border border-zinc-800/80 sm:border-0 text-left">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>24/7 intelligent customer-support agent</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 sm:p-0 rounded-xl sm:rounded-none bg-[#0c0c12]/60 sm:bg-transparent border border-zinc-800/80 sm:border-0 text-left">
                <CheckCircle2 className="w-4 h-4 text-[#d99b73] shrink-0" />
                <span>Private preview before final delivery</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 sm:p-0 rounded-xl sm:rounded-none bg-[#0c0c12]/60 sm:bg-transparent border border-zinc-800/80 sm:border-0 text-left">
                <CheckCircle2 className="w-4 h-4 text-[#d99b73] shrink-0" />
                <span>Direct WhatsApp consultation &amp; setup</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-cta-whatsapp"
                href={getWhatsAppUrl(CONTACT_INFO.websiteBuildingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d99b73] via-[#c2855f] to-[#b47b59] hover:from-[#e4b090] hover:to-[#c2855f] text-black font-extrabold text-base transition-all duration-200 shadow-xl shadow-black hover:shadow-[#d99b73]/20 active:scale-[0.98]"
              >
                <span>Build My Website</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <a
                id="hero-cta-agent"
                href={getWhatsAppUrl(CONTACT_INFO.agentMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#101015] hover:bg-[#16161d] text-slate-200 hover:text-white font-semibold text-base border border-zinc-800 transition-all duration-200 hover:border-cyan-500/40 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-cyan-400" />
                <span>Talk to Builder Agent</span>
              </a>
            </div>

            {/* Trust Line with WhatsApp Contact */}
            <div className="mt-7 flex items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#d99b73]" />
              <span>
                Direct WhatsApp Contact:{' '}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#d99b73] underline underline-offset-4 decoration-[#d99b73]/50 transition-colors"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </span>
            </div>
          </div>

          {/* Right Column: 3D Carbon Black Card showcasing the Website & Agent System */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative subtle halo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#d99b73]/20 via-transparent to-cyan-500/15 blur-xl opacity-60 pointer-events-none" />

              {/* Matte Carbon Glass Card */}
              <div className="relative rounded-2xl bg-[#0c0c11] border border-zinc-800/90 shadow-2xl shadow-black overflow-hidden backdrop-blur-xl p-5 sm:p-6">
                {/* Browser top-bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                    <span className="ml-2 text-[11px] font-mono text-slate-400 truncate max-w-[160px] sm:max-w-[200px]">
                      yourbusiness.com
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#16161e] border border-zinc-700/50 text-[10px] font-semibold text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Online &bull; 24/7 Agent
                  </span>
                </div>

                {/* Mockup Preview Area */}
                <div className="space-y-4">
                  {/* Business Website Banner */}
                  <div className="rounded-xl bg-gradient-to-br from-[#121218] to-[#0a0a0e] p-4 border border-zinc-800">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold tracking-wider uppercase text-[#d99b73]">
                          Modern Digital Presence
                        </span>
                        <h4 className="text-base font-bold text-white mt-0.5">
                          High-Converting Business Website
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          Clean mobile-first architecture, tailored showcase, and one-tap customer routing.
                        </p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#181822] border border-zinc-700/60 shrink-0 text-cyan-400">
                        <Globe className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Connected Agent Flow Visualization */}
                  <div className="rounded-xl bg-[#08080c] p-4 border border-zinc-800/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <span className="text-xs font-bold text-white">Builder Agent Sync</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#16161d] text-[#d99b73] font-mono border border-zinc-800">
                        Active 24/7
                      </span>
                    </div>

                    {/* Live Conversation Snapshot */}
                    <div className="space-y-2 text-xs">
                      {/* Customer Question Bubble */}
                      <div className="flex items-end justify-end">
                        <div className="bg-zinc-800 text-white rounded-2xl rounded-br-sm px-3.5 py-2 max-w-[85%] shadow-sm border border-zinc-700/50">
                          Can I see your price list or book for this weekend?
                        </div>
                      </div>

                      {/* Agent Response Bubble */}
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 mt-1">
                          <LogoEmblem size="sm" className="w-6 h-6" />
                        </div>
                        <div className="bg-[#121218] text-slate-200 border border-zinc-800 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[90%] space-y-1.5">
                          <p className="leading-relaxed">
                            Certainly! Here is our current service catalog. Would you like to confirm a slot on Saturday at 3 PM or chat directly with our team on WhatsApp?
                          </p>
                          <div className="pt-1 flex items-center gap-1.5 text-[10px] text-cyan-400 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            <span>Instant automated reply</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tri-channel badges in Carbon Black */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div className="text-center p-2 rounded-lg bg-[#0e0e13] border border-zinc-800/80">
                      <span className="block text-[11px] font-bold text-slate-200">Website</span>
                      <span className="text-[9px] text-cyan-400">On-page widget</span>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-[#0e0e13] border border-zinc-800/80">
                      <span className="block text-[11px] font-bold text-slate-200">WhatsApp</span>
                      <span className="text-[9px] text-[#d99b73]">Direct DM</span>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-[#0e0e13] border border-zinc-800/80">
                      <span className="block text-[11px] font-bold text-slate-200">Telegram</span>
                      <span className="text-[9px] text-slate-400">Automated bot</span>
                    </div>
                  </div>
                </div>

                {/* Subtle depth bottom edge */}
                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Fast setup &bull; No code required</span>
                  <a
                    href="#agent-demo"
                    className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
                  >
                    <span>Try live demo</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
