import React, { useEffect, useRef } from 'react';
import { gymDetails } from '../data/gymData';
import { ArrowUpRight, Clock, Layers, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const Hero = ({ onDummyWhatsApp }) => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-fade',
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-[100dvh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Precision Hero Photography Background with Soft Ambient Reveal */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-35 filter contrast-125"
        style={{ backgroundImage: `url("${gymDetails.heroImage || '/bg.jpg'}")` }}
      />
      
      {/* Multi-layered Vignette & Glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#070709]/85 via-[#070709]/70 to-[#070709] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gym-crimson/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow Hardware Pill */}
        <div className="hero-fade inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gym-crimson animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
            Unisex Athletic Facility • {gymDetails.location}
          </span>
        </div>

        {/* Guaranteed 2-Line Wide Headline */}
        <div ref={headlineRef} className="w-full max-w-4xl mb-6">
          <h1 className="hero-fade text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black uppercase tracking-tight text-white leading-[1.05] md:leading-[0.98]">
            <span className="block drop-shadow-sm">Unleash Your Potential</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-gym-crimson">
              Burn Calories & Build Strength
            </span>
          </h1>
        </div>

        {/* Balanced Editorial Body */}
        <p className="hero-fade text-sm sm:text-base md:text-lg text-gym-muted max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Madurai's premier training sanctuary. Engineered with dedicated dual floors for women and men, biomechanical equipment, and private coaching.
        </p>

        {/* Double-Bezel Spec Enclosure (Hardware Look) */}
        <div className="hero-fade w-full max-w-2xl double-bezel-outer mb-10">
          <div className="double-bezel-inner p-5 sm:p-6 text-left">
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gym-muted mb-0.5">Operating Hours</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">Mon – Sat: 5:30 AM – 9:00 PM</p>
                  <p className="text-[11px] text-white/40">Sunday Closed (Recovery)</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t sm:border-t-0 sm:border-l border-white/5 pt-4 sm:pt-0 sm:pl-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gym-crimson shrink-0">
                  <Layers size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gym-muted mb-0.5">Dual Floor Architecture</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">2nd Floor: Women Only</p>
                  <p className="text-[11px] text-white/40">3rd Floor: Men's Zone</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Precision Action Buttons */}
        <div className="hero-fade flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          
          <button
            onClick={onDummyWhatsApp}
            className="group w-full sm:w-auto rounded-full bg-white text-[#0A0A0C] pl-6 pr-2 py-2 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-4 transition-all duration-500 ease-fluid active:scale-[0.98] hover:bg-gym-crimson hover:text-white cursor-pointer shadow-lg shadow-black/40"
          >
            <span>Start Training</span>
            <div className="w-7 h-7 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={15} />
            </div>
          </button>

          <a 
            href="#memberships" 
            className="w-full sm:w-auto rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white px-7 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
          >
            Explore Memberships
          </a>

        </div>

        {/* Scroll Indicator */}
        <a 
          href="#about"
          className="hero-fade mt-16 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-gym-muted hover:text-white transition-colors"
        >
          <span>Scroll down</span>
          <ChevronDown size={13} className="animate-bounce" />
        </a>

      </div>
    </section>
  );
};

export default Hero;
