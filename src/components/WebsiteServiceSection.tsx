import React from 'react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/content';
import {
  Globe,
  Smartphone,
  Sparkles,
  ArrowRight,
  Layout,
  MessageCircleQuestion,
  ShoppingBag,
  Users
} from 'lucide-react';

export const WebsiteServiceSection: React.FC = () => {
  const capabilities = [
    {
      icon: Layout,
      title: 'Build a Completely New Website',
      desc: 'Start strong from day one. We engineer custom, branded websites crafted around your products, services, and local market.'
    },
    {
      icon: Sparkles,
      title: 'Upgrade & Redesign Outdated Sites',
      desc: 'Turn an old, clunky, or slow site into a sleek modern asset that reflects the true caliber of your business.'
    },
    {
      icon: Smartphone,
      title: 'Obsessively Mobile-Friendly',
      desc: 'Optimized specifically for smartphones so customers opening your link from WhatsApp experience lightning-fast, flawless browsing.'
    },
    {
      icon: ShoppingBag,
      title: 'Showcase Products & Services',
      desc: 'Clean catalogs, clear price presentation, high-resolution imagery, and structured information that answers customer doubts.'
    },
    {
      icon: MessageCircleQuestion,
      title: 'Instant Inquiries & WhatsApp Funnels',
      desc: 'Every page is strategically equipped with one-tap contact buttons so visitors turn into paying customers without friction.'
    },
    {
      icon: Users,
      title: 'Customer-Support Integration',
      desc: 'Embedded AI assistant ready to assist clients 24/7 with opening hours, directions, policies, and order requests.'
    }
  ];

  return (
    <section id="website-service" className="py-20 lg:py-28 relative bg-[#050507] border-t border-zinc-800/80">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d99b73]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission & Core Value */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101015] border border-zinc-800 text-[#d99b73] text-xs font-semibold uppercase tracking-wider mb-4">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Website Development &amp; Modernization</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              A Real Business Website.{' '}
              <span className="text-[#d99b73]">Not Just an Online Brochure.</span>
            </h2>

            <p className="mt-5 text-base text-slate-300 leading-relaxed">
              At Builder Agent, we don't believe in simply &ldquo;having a website&rdquo; to tick a box.
              A website should be your hardest working digital asset: one that makes your business look
              reputable, clearly communicates your offerings, and makes it effortless for clients to
              reach you.
            </p>

            {/* Crucial distinction callout box */}
            <div className="mt-6 p-5 rounded-2xl bg-[#0b0b0f] border border-zinc-800 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d99b73] block">
                The Builder Agent Standard
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                When someone clicks your website link on your <strong>WhatsApp Business profile</strong>,
                they must understand what you do within 3 seconds, trust your professionalism, and know
                exactly how to contact you or place an order.
              </p>
            </div>

            <div className="mt-8">
              <a
                href={getWhatsAppUrl(CONTACT_INFO.websiteBuildingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d99b73] via-[#c2855f] to-[#b47b59] hover:from-[#e4b090] hover:to-[#c2855f] text-black font-extrabold text-sm transition-all duration-200 shadow-xl shadow-black active:scale-95"
              >
                <span>Discuss Your Website Project</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Website Capabilities Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#0c0c11] border border-zinc-800/90 hover:border-zinc-700 transition-all duration-200 hover:-translate-y-0.5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#14141c] border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:text-[#d99b73] transition-colors mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
