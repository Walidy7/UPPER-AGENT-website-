import React from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/content';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040406] border-t border-zinc-850 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-850">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Builder Agent helps small and growing businesses improve their online presence and
              customer communication through modern, high-performance websites and intelligent 24/7
              agents.
            </p>
            <p className="text-xs text-slate-500">
              Modern web engineering &bull; Fast turnarounds &bull; Direct consultation
            </p>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-[#d99b73] transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d99b73] transition-colors">
                  Website Redesign &amp; Modernization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d99b73] transition-colors">
                  Website Improvement &amp; Mobile UX
                </a>
              </li>
              <li>
                <a href="#agent-service" className="hover:text-[#d99b73] transition-colors">
                  Business Customer Agents
                </a>
              </li>
              <li>
                <a href="#agent-demo" className="hover:text-[#d99b73] transition-colors">
                  On-Site Website Chat Agents
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d99b73] transition-colors">
                  WhatsApp &amp; Telegram Agents
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d99b73] transition-colors">
                  Customer Communication Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Get In Touch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have questions about building your website or adding an agent? Message us directly.
            </p>
            <div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d99b73] via-[#c2855f] to-[#b47b59] text-black text-xs font-extrabold shadow transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-black fill-black" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              WhatsApp: {CONTACT_INFO.phoneDisplay}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Builder Agent. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
