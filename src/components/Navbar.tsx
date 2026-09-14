import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/content';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Interactive Demo', href: '#agent-demo' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080a]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl shadow-black py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Emblem from User Image */}
          <a
            href="#home"
            id="nav-logo"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg group"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links (Carbon Black Pill with subtle Zinc Border) */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101015]/90 px-4 py-1.5 rounded-full border border-zinc-800/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-zinc-800/70 rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Direct WhatsApp Callout in Warm Copper/Bronze */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-whatsapp-cta"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl bg-gradient-to-r from-[#d99b73] via-[#c2855f] to-[#b47b59] hover:from-[#e4b090] hover:to-[#c2855f] text-black transition-all duration-200 shadow-md shadow-black hover:shadow-[#d99b73]/20 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-black fill-black" />
              <span>Talk to Builder Agent</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-black" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl bg-[#121217] border border-zinc-800 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu in Carbon Black */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#08080c]/98 backdrop-blur-2xl border-b border-zinc-800 shadow-2xl p-5 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-zinc-800/60 border border-transparent hover:border-zinc-700/50 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-zinc-800/80">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-base font-bold rounded-xl bg-gradient-to-r from-[#d99b73] to-[#c2855f] text-black shadow-lg shadow-black active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-black fill-black" />
                <span>WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
