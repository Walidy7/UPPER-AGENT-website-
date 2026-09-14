import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/content';
import {
  X,
  MessageCircle,
  MoreHorizontal,
  Home,
  Layers,
  Sparkles,
  PlayCircle,
  Briefcase,
  ShieldCheck,
  Phone
} from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Services', href: '#services', icon: Layers },
    { label: 'How It Works', href: '#how-it-works', icon: Sparkles },
    { label: 'Interactive Demo', href: '#agent-demo', icon: PlayCircle },
    { label: 'Our Work', href: '#portfolio', icon: Briefcase },
    { label: 'Why Us', href: '#why-us', icon: ShieldCheck },
    { label: 'Contact', href: '#contact', icon: Phone },
  ];

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#07070b]/95 backdrop-blur-md border-b border-zinc-800/90 shadow-2xl shadow-black ${
        isScrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Column: Logo (flex-1 balances the right column) */}
          <div className="flex items-center flex-1 justify-start min-w-0">
            <a
              href="#home"
              id="nav-logo"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg group shrink-0"
            >
              <Logo size="md" />
            </a>
          </div>

          {/* Center Column: Desktop Navigation Links (Mathematically centered on PC) */}
          <nav
            id="desktop-nav-links"
            className="hidden lg:flex items-center justify-center gap-1 bg-[#121218]/90 px-3.5 py-1.5 rounded-full border border-zinc-700/80 shadow-inner shrink-0"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 xl:px-4 py-1.5 text-xs xl:text-sm font-semibold text-slate-200 hover:text-white hover:bg-zinc-800/80 rounded-full transition-all duration-150 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Column: Symmetrically Anchored 3-Dots Menu Button */}
          <div className="flex items-center flex-1 justify-end">
            <button
              id="nav-three-dots-menu-btn"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl bg-[#1a1a24] hover:bg-[#252533] border-2 border-zinc-600 hover:border-cyan-400 text-white shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer active:scale-95 shrink-0"
              aria-expanded={menuOpen}
              aria-label="Open navigation menu (3 dots)"
              title="Menu: Home, Services, How It Works, Demo, Our Work, Contact"
            >
              {menuOpen ? (
                <>
                  <X className="w-5 h-5 text-white" />
                  <span className="text-xs font-bold text-white tracking-wide">Close</span>
                </>
              ) : (
                <>
                  {/* Three distinct dots */}
                  <MoreHorizontal className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-bold text-white tracking-wide">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modern Slide-Down Navigation Drawer (Shows Home, Services, etc.) */}
      {menuOpen && (
        <div
          id="nav-menu-drawer"
          className="fixed inset-x-0 top-[100%] bg-[#09090e]/98 backdrop-blur-2xl border-b-2 border-zinc-700 shadow-[0_20px_50px_rgba(0,0,0,0.95)] p-5 sm:p-6 animate-in fade-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
              <span className="text-xs uppercase font-extrabold text-cyan-400 tracking-wider">
                Quick Navigation
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 text-xs font-semibold flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-100 hover:text-white bg-[#111117] hover:bg-[#1c1c28] border border-zinc-800 hover:border-cyan-500/50 transition-all duration-150 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#181822] border border-zinc-700 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Direct WhatsApp Callout in Drawer */}
            <div className="mt-4 pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <span className="text-xs text-slate-400 block">Direct WhatsApp Support:</span>
                <span className="text-sm font-bold text-white font-mono">{CONTACT_INFO.phoneDisplay}</span>
              </div>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-extrabold rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-black active:scale-95 transition-all duration-150"
              >
                <MessageCircle className="w-4 h-4 text-white fill-white" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
