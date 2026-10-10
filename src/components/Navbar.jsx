import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Dumbbell, Shield, Phone, Sparkles } from 'lucide-react';
import { gymDetails } from '../data/gymData';

const Navbar = ({ onDummyWhatsApp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#about' },
    { name: 'Disciplines', href: '#programs' },
    { name: 'Timetable', href: '#schedule' },
    { name: 'Coaching', href: '#trainers' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-fluid px-3 sm:px-6 pt-3 sm:pt-4">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`w-full rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-500 border ${
            scrolled
              ? 'bg-[#0E0E14]/90 backdrop-blur-2xl border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.8)] shadow-red-950/20'
              : 'bg-[#121218]/75 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-full bg-gradient-to-tr from-gym-crimson to-red-500 p-0.5 shadow-lg shadow-gym-crimson/30 group-hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full bg-[#0E0E14] rounded-[10px] sm:rounded-full flex items-center justify-center text-white">
                <Dumbbell size={18} className="text-gym-crimson group-hover:rotate-12 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-base sm:text-lg tracking-tight text-white uppercase leading-none">
                  {gymDetails.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gym-crimson animate-pulse hidden xs:inline-block" />
              </div>
              <span className="text-[9px] font-bold tracking-[0.2em] text-gym-muted uppercase mt-0.5 leading-none">
                {gymDetails.location} • UNISEX
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 bg-white/[0.03] px-2 py-1 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] font-semibold px-3.5 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Button (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onDummyWhatsApp}
              className="group rounded-full bg-white text-[#0A0A0C] pl-4 pr-1.5 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all duration-500 ease-fluid active:scale-[0.98] hover:bg-gym-crimson hover:text-white cursor-pointer shadow-md shadow-white/5"
            >
              <span>Book Trial</span>
              <div className="w-6 h-6 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={13} />
              </div>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onDummyWhatsApp}
              className="px-3 py-1.5 rounded-full bg-gym-crimson text-white text-[11px] font-bold uppercase tracking-wider shadow-md shadow-gym-crimson/30"
            >
              Trial
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 text-white/90 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Tablet Menu Button for sizes between 640px and 1024px */}
          <div className="hidden sm:flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 text-white/90 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile / Tablet Drawer with Fluid Blur */}
        {isOpen && (
          <div className="lg:hidden mt-2 bg-[#0E0E14]/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 space-y-2 border border-white/10 shadow-2xl animate-fade-in">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/5">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                <Shield size={16} className="text-gym-crimson" />
                <span className="text-[11px] text-white/80 font-bold uppercase">2nd Fl: Women</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                <Dumbbell size={16} className="text-gym-crimson" />
                <span className="text-[11px] text-white/80 font-bold uppercase">3rd Fl: Men</span>
              </div>
            </div>

            <div className="py-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 text-xs font-bold text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors uppercase tracking-wider"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={13} className="text-gym-muted" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={(e) => {
                  setIsOpen(false);
                  onDummyWhatsApp(e);
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gym-crimson to-red-600 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-gym-crimson/30 cursor-pointer"
              >
                <Sparkles size={14} />
                <span>Claim Free Workout Pass</span>
              </button>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 text-center text-[11px] text-gym-muted hover:text-white transition-colors uppercase font-bold"
              >
                Madurai Center Details &rarr;
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
