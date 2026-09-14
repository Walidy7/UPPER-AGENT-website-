import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/content';
import { X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-dismiss tooltip after 14 seconds or user click
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 14000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-5 sm:bottom-7 sm:right-7 z-[9999] flex items-center gap-3 select-none pointer-events-auto"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        paddingRight: 'env(safe-area-inset-right, 0px)',
      }}
    >
      {/* Floating Tooltip Callout - High contrast, visible on both mobile and desktop */}
      {showTooltip && (
        <div
          id="floating-whatsapp-tooltip"
          className="flex items-center gap-2.5 bg-[#0e0e14] border border-emerald-500/40 text-slate-100 px-3.5 py-2 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.85)] text-xs sm:text-sm backdrop-blur-xl animate-in fade-in slide-in-from-right-4 duration-300"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>

          <a
            href={getWhatsAppUrl(CONTACT_INFO.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-emerald-300 transition-colors"
          >
            Chat on <span className="text-emerald-400 font-bold">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-1 ml-0.5 rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Official WhatsApp Button with Authentic Icon and Glow */}
      <a
        id="persistent-floating-whatsapp"
        href={getWhatsAppUrl(CONTACT_INFO.defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_25px_rgba(37,211,102,0.5),0_10px_30px_rgba(0,0,0,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/30 cursor-pointer"
        aria-label="Chat with Builder Agent on WhatsApp"
        title="Chat with Builder Agent on WhatsApp"
      >
        {/* Soft Ambient Ring Pulse */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        {/* Authentic Official WhatsApp Icon */}
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 fill-white filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover:rotate-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Small floating WhatsApp badge indicator */}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white border-2 border-[#25D366] flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </span>

        <span className="sr-only">Contact Builder Agent on WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
      </a>
    </div>
  );
};
