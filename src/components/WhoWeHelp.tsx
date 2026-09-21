import React, { useState } from 'react';
import { WHO_WE_HELP } from '../data/content';
import {
  Utensils,
  Scissors,
  Wrench,
  ShoppingBag,
  Building2,
  Briefcase,
  ArrowRight
} from 'lucide-react';

export const WhoWeHelp: React.FC = () => {
  const [selectedCatIndex, setSelectedCatIndex] = useState<number>(0);

  const icons = [Utensils, Scissors, Wrench, ShoppingBag, Building2, Briefcase];

  const currentCat = WHO_WE_HELP[selectedCatIndex] || WHO_WE_HELP[0];
  const CurrentIcon = icons[selectedCatIndex] || Briefcase;

  return (
    <section id="who-we-help" className="py-20 lg:py-28 relative bg-[#060609] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101015] border border-zinc-800 text-[#d99b73] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Built For Local &amp; Growing Enterprises</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Who Builder Agent <span className="text-[#d99b73]">Empowers</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Whether you run a bustling local restaurant, a high-touch salon, an automotive shop, or
            a boutique hotel, we design solutions that speak your industry language.
          </p>
        </div>

        {/* Category Pill Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto mb-10">
          {WHO_WE_HELP.map((cat, idx) => {
            const Icon = icons[idx] || Briefcase;
            const isSelected = selectedCatIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCatIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#d99b73] to-[#c2855f] text-black border-[#d99b73] shadow-lg shadow-black font-extrabold'
                    : 'bg-[#0e0e13] text-slate-300 hover:text-white border-zinc-800 hover:bg-[#15151c]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Feature Spotlight in Carbon Black */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0c0c11] border border-zinc-800 shadow-2xl shadow-black">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#161622] border border-zinc-750 flex items-center justify-center text-cyan-400">
              <CurrentIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
                Industry Solutions
              </span>
              <h3 className="text-xl font-bold text-white leading-tight">
                {currentCat.title}
              </h3>
            </div>
          </div>

          {/* Business types in this category */}
          <div className="mb-6">
            <span className="text-xs text-slate-400 block mb-2 font-medium">
              Businesses we commonly support in this category:
            </span>
            <div className="flex flex-wrap gap-2">
              {currentCat.examples.map((ex, exIdx) => (
                <span
                  key={exIdx}
                  className="px-3 py-1 rounded-lg bg-[#14141c] text-xs font-semibold text-slate-200 border border-zinc-800"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {/* How Builder Agent solves their day-to-day */}
          <div className="p-4 rounded-xl bg-[#08080c] border border-zinc-800 mb-6">
            <span className="text-xs font-bold text-[#d99b73] uppercase tracking-wider block mb-1">
              How Builder Agent Solves Your Customer Bottleneck:
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentCat.agentBenefit}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-slate-400">
              Don't see your exact business? We build custom agents for any service.
            </span>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d99b73] via-[#c2855f] to-[#b47b59] hover:from-[#e4b090] hover:to-[#c2855f] text-black font-extrabold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <span>Discuss {currentCat.title} Solution</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
