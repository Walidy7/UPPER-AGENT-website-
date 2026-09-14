import React from 'react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/content';
import {
  Bot,
  Clock,
  HelpCircle,
  ShoppingBag,
  UserCheck,
  Zap,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export const AiAgentSection: React.FC = () => {
  const businessBenefits = [
    {
      icon: Clock,
      title: 'Always Available (24/7/365)',
      desc: 'Never miss a late-night inquiry or weekend lead while you and your team are resting or busy with operations.'
    },
    {
      icon: HelpCircle,
      title: 'Answers Common Questions in Seconds',
      desc: 'Instantly provides accurate information on pricing, service menus, hours, location, and policies without keeping clients waiting.'
    },
    {
      icon: ShoppingBag,
      title: 'Assists Orders & Service Inquiries',
      desc: 'Guides customers through your catalog, gathers their exact requests, and packages order details cleanly for your review.'
    },
    {
      icon: Zap,
      title: 'Eliminates Repetitive Typing',
      desc: 'Stop copying and pasting the exact same reply to 50 people every day. Builder Agent handles routine inquiries automatically.'
    },
    {
      icon: UserCheck,
      title: 'Seamless Human Escalation',
      desc: 'When a customer has a unique or high-value request, the agent immediately routes them to you or your staff on WhatsApp.'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Consistency',
      desc: 'One intelligent core that operates consistently on your website, WhatsApp, and Telegram, keeping all customer touchpoints organized.'
    }
  ];

  return (
    <section id="agent-service" className="py-20 lg:py-28 relative bg-[#060609] border-t border-zinc-800/80">
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[450px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101015] border border-zinc-800 text-[#d99b73] text-xs font-semibold uppercase tracking-wider mb-3">
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Builder Agent Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            An Intelligent Customer Assistant{' '}
            <span className="text-[#d99b73]">Tailored Around Your Business</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            No complex tech jargon or complicated setup. We build a smart digital assistant that knows
            your business inside out, speaks to your customers with professional courtesy, and helps you
            close sales even when you are unavailable.
          </p>
        </div>

        {/* Channels Pill Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <span className="text-xs sm:text-sm text-slate-400 font-medium">Deployable across:</span>
          <span className="px-4 py-1.5 rounded-full bg-[#0d0d12] border border-zinc-800 text-slate-200 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Your Website Chat
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#0d0d12] border border-zinc-800 text-[#d99b73] text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#d99b73]" />
            WhatsApp Business
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#0d0d12] border border-zinc-800 text-slate-300 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            Telegram
          </span>
        </div>

        {/* Business Value Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessBenefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#0c0c11] border border-zinc-800/90 hover:border-zinc-700 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#14141c] border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:text-[#d99b73] transition-colors mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar in Carbon Black */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0c0c12] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Want to see how an agent would sound for your business?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Message us on WhatsApp. Tell us your business name, and we'll show you an example response.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(CONTACT_INFO.agentMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d99b73] via-[#c2855f] to-[#b47b59] hover:from-[#e4b090] hover:to-[#c2855f] text-black font-extrabold text-sm transition-all duration-200 shadow-lg shadow-black active:scale-95"
          >
            <span>Ask About Your Business Agent</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};
