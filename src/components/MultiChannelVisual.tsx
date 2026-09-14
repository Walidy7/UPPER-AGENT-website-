import React, { useState } from 'react';
import { MULTI_CHANNELS } from '../data/content';
import {
  Globe,
  MessageCircle,
  Send,
  ArrowDown,
  CheckCircle2,
  Layers,
  Cpu
} from 'lucide-react';

export const MultiChannelVisual: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<'website' | 'whatsapp' | 'telegram'>('whatsapp');

  const channelIcons: Record<string, any> = {
    website: Globe,
    whatsapp: MessageCircle,
    telegram: Send
  };

  return (
    <section className="py-20 lg:py-28 relative bg-[#050507] border-t border-zinc-800/80 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#d99b73]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101015] border border-zinc-800 text-[#d99b73] text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Unified Multi-Channel Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            One Intelligent Core.{' '}
            <span className="text-[#d99b73]">Every Channel Your Customers Use.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            &ldquo;My customers can communicate with my business through the channels they already
            use every day.&rdquo;
          </p>
        </div>

        {/* Clean Visual Diagram */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Customer Inflow */}
          <div className="flex flex-col items-center">
            <div className="px-6 py-3 rounded-2xl bg-[#0c0c11] border border-zinc-800 text-center shadow-xl">
              <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
                Customer Inbound Inquiry
              </span>
              <p className="text-sm font-semibold text-white mt-0.5">
                Prospective Client Asks a Question or Wants to Order
              </p>
            </div>

            {/* Connecting line down */}
            <div className="h-8 w-0.5 bg-gradient-to-b from-cyan-500 to-[#d99b73] relative my-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <ArrowDown className="w-4 h-4 text-[#d99b73] -mt-1 mb-2" />

            {/* Step 2: The Core Builder Agent Engine */}
            <div className="w-full max-w-lg p-6 rounded-2xl bg-[#0c0c12] border-2 border-zinc-700/80 shadow-2xl shadow-black text-center relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#d99b73]/15 rounded-full blur-2xl" />
              
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-[#d99b73] to-[#c2855f] text-black mb-3 shadow-lg">
                <Cpu className="w-6 h-6 text-black" />
              </div>
              
              <h3 className="text-xl font-black text-white tracking-wide">BUILDER AGENT BRAIN</h3>
              <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto">
                Trained on your business pricing, opening hours, product catalog, delivery policies &amp; FAQ
              </p>

              <div className="mt-4 pt-3 border-t border-zinc-800 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-[11px] text-slate-300">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Instant Verification
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Order Packaging
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d99b73]" />
                  Human Escalation
                </span>
              </div>
            </div>

            {/* Branching Lines Down */}
            <div className="h-8 w-0.5 bg-gradient-to-b from-[#d99b73] to-cyan-500 relative my-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#d99b73] animate-ping" />
            </div>
            <ArrowDown className="w-4 h-4 text-cyan-400 -mt-1 mb-6" />
          </div>

          {/* Step 3: The 3 Output Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {MULTI_CHANNELS.map((chan) => {
              const Icon = channelIcons[chan.id] || Globe;
              const isSelected = activeChannel === chan.id;

              return (
                <div
                  key={chan.id}
                  onClick={() => setActiveChannel(chan.id)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all duration-200 border text-left ${
                    isSelected
                      ? 'bg-[#101016] border-[#d99b73] shadow-xl shadow-black ring-1 ring-[#d99b73]/40'
                      : 'bg-[#0a0a0e] border-zinc-800 hover:border-zinc-700 hover:bg-[#0f0f14]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        chan.id === 'whatsapp'
                          ? 'bg-[#181822] text-[#d99b73] border border-zinc-750'
                          : chan.id === 'telegram'
                          ? 'bg-[#181822] text-slate-300 border border-zinc-750'
                          : 'bg-[#181822] text-cyan-400 border border-zinc-750'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#14141c] text-slate-300 border border-zinc-800">
                      {chan.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1">{chan.name}</h4>
                  <p className="text-xs text-[#d99b73] font-medium mb-3">{chan.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{chan.description}</p>

                  <div className="space-y-1.5 pt-3 border-t border-zinc-800">
                    {chan.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
