import React from 'react';
import { WHY_UPPER_AGENT, CONTACT_INFO, getWhatsAppUrl } from '../data/content';
import {
  ShieldCheck,
  Smartphone,
  Eye,
  MessageCircle,
  Sparkles,
  Zap,
  CheckCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const WhyUpperAgent: React.FC = () => {
  const icons = [
    ShieldCheck,
    Sparkles,
    Smartphone,
    MessageCircle,
    CheckCircle,
    Eye,
    Zap,
    HelpCircle
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 relative bg-[#050507] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101015] border border-zinc-800 text-[#d99b73] text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Built on Trust &amp; Craftsmanship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Why Growing Businesses{' '}
            <span className="text-[#d99b73]">Choose Builder Agent</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            No empty jargon, no inflated marketing claims. We build dependable digital tools that
            make your business easier to find, more credible to buy from, and faster to respond.
          </p>
        </div>

        {/* 8 Core Pillars Grid in Carbon Black */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_UPPER_AGENT.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0c11] border border-zinc-800/90 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#14141c] border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:bg-[#d99b73] group-hover:text-black transition-all duration-200 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Profile Placement Reassurance */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0c0c12] border border-zinc-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Perfect for WhatsApp Business</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              Ready to paste a trustworthy website link on your WhatsApp profile?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Let's craft a website that makes visitors say &ldquo;This is a serious business I can trust.&rdquo;
            </p>
          </div>

          <a
            href={getWhatsAppUrl(CONTACT_INFO.websiteBuildingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d99b73] via-[#c2855f] to-[#b47b59] text-black font-extrabold text-sm transition-all duration-200 shadow-lg shadow-black active:scale-95"
          >
            <span>Message {CONTACT_INFO.phoneDisplay}</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};
