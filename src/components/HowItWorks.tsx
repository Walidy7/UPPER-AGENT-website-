import React from 'react';
import { HOW_IT_WORKS, getWhatsAppUrl } from '../data/content';
import {
  MessageSquare,
  Layout,
  Eye,
  Bot,
  Rocket,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const stepIcons = [MessageSquare, Layout, Eye, Bot, Rocket];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative bg-[#050507] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101015] border border-zinc-800 text-[#d99b73] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Clear, Predictable Path</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How Builder Agent Works{' '}
            <span className="text-[#d99b73]">From Idea to Live Customers</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A frictionless 5-step process designed to respect your time and deliver a reliable
            business website and automated agent without hassle.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards in Carbon Black */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
          {HOW_IT_WORKS.map((step, idx) => {
            const Icon = stepIcons[idx] || Rocket;
            return (
              <div
                key={step.number}
                className="relative p-6 rounded-2xl bg-[#0c0c11] border border-zinc-800/90 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-[#d99b73] group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#14141c] border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:bg-[#d99b73] group-hover:text-black transition-all duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 text-[11px] text-[#d99b73] font-medium">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Consultation Bar */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-4">
            Ready to get started with step 01? It begins with a friendly WhatsApp message.
          </p>
          <a
            href={getWhatsAppUrl('Hello Builder Agent, I want to start step 01 and tell you about my business.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d99b73] via-[#c2855f] to-[#b47b59] hover:from-[#e4b090] hover:to-[#c2855f] text-black font-extrabold text-sm transition-all duration-200 shadow-xl shadow-black active:scale-95"
          >
            <span>Start Step 01 On WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};
