import React, { useState } from 'react';
import { PREVIEW_STEPS } from '../data/content';
import {
  Eye,
  Check,
  ShieldCheck,
  ArrowRight,
  RefreshCw
} from 'lucide-react';

export const PreviewBeforeLaunch: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);

  return (
    <section id="preview-guarantee" className="py-20 lg:py-28 relative bg-[#060609] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101015] border border-zinc-800 text-[#d99b73] text-xs font-semibold uppercase tracking-wider mb-3">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>Client Reassurance &amp; Transparency</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Preview &amp; Test Your Website{' '}
            <span className="text-[#d99b73]">Before Final Delivery</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            You never pay blind. You receive a private, working live preview link to inspect every
            page, test every button, and request any changes before your website goes live to the world.
          </p>
        </div>

        {/* Reassurance Feature Callout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-[#0c0c11] border border-zinc-800/90">
            <div className="w-10 h-10 rounded-xl bg-[#14141c] flex items-center justify-center text-cyan-400 mb-4 border border-zinc-800">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Live Interactive Link</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Open the preview link directly on your smartphone, test how it feels in WhatsApp, and view it on your desktop browser.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0c11] border border-zinc-800/90">
            <div className="w-10 h-10 rounded-xl bg-[#14141c] flex items-center justify-center text-[#d99b73] mb-4 border border-zinc-800">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Review &amp; Refine</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Want text adjusted? Want different images, contact buttons, or colors? We revise and polish until you are 100% happy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0c11] border border-zinc-800/90">
            <div className="w-10 h-10 rounded-xl bg-[#14141c] flex items-center justify-center text-cyan-400 mb-4 border border-zinc-800">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Full Control &amp; Peace of Mind</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Nothing is launched until you personally sign off. You are always in complete control of your digital identity.
            </p>
          </div>
        </div>

        {/* 6-Step Visual Timeline in Carbon Black */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0a0e] border border-zinc-800 shadow-2xl shadow-black">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#d99b73]">
                The 6-Step Approval Journey
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                How We Guarantee Your Satisfaction
              </h4>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14141c] text-slate-200 text-xs font-semibold border border-zinc-700 shadow-sm">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Guaranteed Review</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PREVIEW_STEPS.map((item) => {
              const isCurrent = activeStep === item.step;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(item.step)}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all duration-200 ${
                    isCurrent
                      ? 'bg-[#121218] border-[#d99b73] ring-1 ring-[#d99b73]/40 shadow-lg'
                      : 'bg-[#0c0c11] border-zinc-800 hover:border-zinc-700 hover:bg-[#101015]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        isCurrent
                          ? 'bg-gradient-to-r from-[#d99b73] to-[#c2855f] text-black font-extrabold'
                          : 'bg-[#181822] text-slate-300 border border-zinc-800'
                      }`}
                    >
                      0{item.step}
                    </span>
                    {item.step === 3 && (
                      <span className="text-[10px] uppercase font-bold text-cyan-300 bg-[#161622] px-2 py-0.5 rounded border border-cyan-500/30">
                        Live Preview Link
                      </span>
                    )}
                  </div>

                  <h5 className="text-sm font-bold text-white mb-1.5 leading-snug">
                    {item.title}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>You inspect everything before public rollout. No surprises, no regrets.</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d99b73] via-[#c2855f] to-[#b47b59] hover:from-[#e4b090] hover:to-[#c2855f] text-black font-extrabold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <span>Start With A Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
