import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { PortfolioProject } from '../types';
import {
  Laptop,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Eye,
  MessageCircle
} from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<PortfolioProject>(PORTFOLIO_PROJECTS[0]);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative bg-[#050507] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101015] border border-zinc-800 text-[#d99b73] text-xs font-semibold uppercase tracking-wider mb-3">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>Example Concepts &amp; Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            What Your Website <span className="text-[#d99b73]">Could Look Like</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Explore realistic website concepts designed for real-world businesses. Every layout is
            engineered to capture customer attention and route them directly into conversation.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {PORTFOLIO_PROJECTS.map((project) => {
            const isSelected = activeProject.id === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#d99b73] to-[#c2855f] text-black border-[#d99b73] shadow-lg shadow-black font-extrabold'
                    : 'bg-[#0e0e13] text-slate-300 hover:text-white border-zinc-800 hover:bg-[#15151c]'
                }`}
              >
                <span>{project.title}</span>
                <span className="text-[10px] ml-1.5 opacity-70">({project.category.split('&')[0].trim()})</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Device Mockup Viewer in Carbon Black */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0a0a0e] border border-zinc-800 shadow-2xl shadow-black overflow-hidden">
          {/* Mockup Toolbar */}
          <div className="bg-[#121218] px-5 py-3.5 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-white">{activeProject.title}</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#181822] text-[#d99b73] border border-zinc-800">
                {activeProject.clientType}
              </span>
            </div>

            {/* Device Switcher */}
            <div className="flex items-center gap-1 bg-[#060609] p-1 rounded-lg border border-zinc-800">
              <button
                type="button"
                onClick={() => setDeviceMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                  deviceMode === 'desktop'
                    ? 'bg-[#181822] text-white shadow-sm border border-zinc-750'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Laptop className="w-3.5 h-3.5 text-cyan-400" />
                <span>Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setDeviceMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                  deviceMode === 'mobile'
                    ? 'bg-[#181822] text-white shadow-sm border border-zinc-750'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 text-[#d99b73]" />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          {/* Realistic Visual Canvas */}
          <div className="p-4 sm:p-8 bg-[#050507] flex items-center justify-center min-h-[460px]">
            {deviceMode === 'desktop' ? (
              /* Desktop Mockup */
              <div className="w-full max-w-3xl rounded-2xl bg-[#0c0c11] border border-zinc-800 shadow-2xl shadow-black overflow-hidden animate-in fade-in duration-200">
                {/* Simulated browser header */}
                <div className="bg-[#121218] px-4 py-2.5 border-b border-zinc-800 flex items-center gap-2 text-xs text-slate-400">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 ml-2">
                    https://www.{activeProject.id}.com
                  </span>
                </div>

                {/* Simulated Website Body */}
                <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[#101017] via-[#0b0b0f] to-[#07070a]">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800 gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-7 h-7 rounded-md bg-[#d99b73] flex items-center justify-center font-bold text-black text-xs shrink-0">
                        {activeProject.title[0]}
                      </div>
                      <span className="text-sm font-bold text-white truncate">{activeProject.title}</span>
                    </div>
                    <span className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-md bg-[#161622] text-[#d99b73] border border-zinc-800 shrink-0">
                      WhatsApp Connected
                    </span>
                  </div>

                  <div className="max-w-xl">
                    <span className="text-[11px] uppercase font-bold text-cyan-400 tracking-wider">
                      {activeProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mt-1 mb-3 leading-tight">
                      {activeProject.desktopPreview.heroTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                      {activeProject.desktopPreview.heroSubtitle}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {activeProject.desktopPreview.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <a
                        href="#contact"
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d99b73] via-[#c2855f] to-[#b47b59] hover:from-[#e4b090] hover:to-[#c2855f] text-black font-bold text-xs flex items-center justify-center gap-2 shadow transition-all active:scale-95"
                      >
                        <span>Request Similar Website</span>
                        <ArrowRight className="w-3.5 h-3.5 text-black" />
                      </a>
                      <span className="text-[11px] text-slate-400 text-center sm:text-left">Integrated 24/7 Agent</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Mobile Smartphone Mockup */
              <div className="w-full max-w-[300px] sm:max-w-[320px] rounded-[36px] bg-[#0c0c12] border-[6px] border-[#181822] shadow-2xl shadow-black p-3.5 sm:p-4 overflow-hidden animate-in fade-in duration-200">
                {/* Speaker pill notch */}
                <div className="w-24 h-4 bg-[#181822] rounded-full mx-auto mb-3" />

                {/* Mobile screen */}
                <div className="rounded-2xl bg-[#09090d] p-4 text-left border border-zinc-800">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
                    <span className="text-xs font-bold text-white truncate max-w-[150px]">
                      {activeProject.title}
                    </span>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-[#161622] text-[#d99b73] border border-zinc-800">
                      Mobile Preview
                    </span>
                  </div>

                  <span className="text-[10px] text-cyan-400 font-bold uppercase block">
                    {activeProject.category}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1 leading-snug">
                    {activeProject.desktopPreview.heroTitle}
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                    {activeProject.desktopPreview.heroSubtitle}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {activeProject.desktopPreview.features.slice(0, 3).map((f, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[10px] text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5">
                    <a
                      href="#contact"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d99b73] to-[#c2855f] hover:from-[#e4b090] text-black font-extrabold text-[11px] flex items-center justify-center gap-1.5 text-center shadow transition-all active:scale-95"
                    >
                      <span>Request This Design</span>
                      <ArrowRight className="w-3.5 h-3.5 text-black" />
                    </a>
                  </div>
                </div>

                {/* Mobile bottom swipe indicator */}
                <div className="w-28 h-1 bg-zinc-700 rounded-full mx-auto mt-4" />
              </div>
            )}
          </div>

          {/* Project Details Footer */}
          <div className="bg-[#101015] px-6 py-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block font-medium">
                Concept Performance Metric:
              </span>
              <p className="text-xs sm:text-sm font-semibold text-[#d99b73]">
                {activeProject.metricsPreview}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d99b73] via-[#c2855f] to-[#b47b59] hover:from-[#e4b090] hover:to-[#c2855f] text-black text-xs sm:text-sm font-extrabold transition-all shadow-md shrink-0 active:scale-95"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
