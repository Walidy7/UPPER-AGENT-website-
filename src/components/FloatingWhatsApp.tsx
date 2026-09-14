import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/content';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-dismiss tooltip after 9 seconds or user click
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      {/* Floating Tooltip Callout */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0d0d12] border border-zinc-700 text-slate-200 px-3.5 py-2 rounded-xl shadow-2xl text-xs backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat with Builder Agent</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        id="persistent-floating-whatsapp"
        href={getWhatsAppUrl(CONTACT_INFO.defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#1e7e34] hover:bg-[#156729] text-white shadow-2xl shadow-black hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-emerald-400/40"
        aria-label="Chat with Builder Agent on WhatsApp"
      >
        {/* Ambient Ring Pulse */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />

        <MessageCircle className="w-7 h-7 text-white fill-white" />

        <span className="sr-only">Contact Builder Agent on WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
      </a>
    </div>
  );
};
