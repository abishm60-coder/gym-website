import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { gymDetails } from '../data/gymData';

const Navbar = ({ onDummyWhatsApp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Architecture', href: '#about' },
    { name: 'Disciplines', href: '#programs' },
    { name: 'Timetable', href: '#schedule' },
    { name: 'Coaching', href: '#trainers' },
    { name: 'Membership', href: '#memberships' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Precision Floating Glass Island */}
      <nav className="bg-[#121216]/85 backdrop-blur-xl rounded-full px-5 py-2.5 flex items-center justify-between border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        
        {/* Brand Minimalist Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-black text-sm tracking-tighter group-hover:bg-gym-crimson group-hover:border-gym-crimson transition-colors duration-500">
            C
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-base tracking-tight text-white uppercase leading-none">
              {gymDetails.name}
            </span>
            <span className="text-[8px] font-bold tracking-[0.2em] text-gym-muted uppercase mt-0.5">
              {gymDetails.location}
            </span>
          </div>
        </a>

        {/* Precision Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full text-gym-muted hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Button-in-Button Nested CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={onDummyWhatsApp}
            className="group rounded-full bg-white text-[#0A0A0C] pl-4 pr-1.5 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-500 ease-fluid active:scale-[0.98] hover:bg-gym-crimson hover:text-white cursor-pointer"
          >
            <span>Inquire Visit</span>
            <div className="w-6 h-6 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={13} />
            </div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-white/80 hover:text-white"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </nav>

      {/* Expanded Modal Layer */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-[#121216]/95 backdrop-blur-2xl rounded-3xl p-5 space-y-2 border border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/5">
            <button
              onClick={(e) => {
                setIsOpen(false);
                onDummyWhatsApp(e);
              }}
              className="w-full py-3 rounded-full bg-gym-crimson text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Schedule Walk-In</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
