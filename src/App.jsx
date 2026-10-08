import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Schedule from './components/Schedule'
import Trainers from './components/Trainers'
import Memberships from './components/Memberships'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { gymDetails } from './data/gymData'
import { MessageSquare, CheckCircle2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [dummyNotice, setDummyNotice] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  const handleWhatsAppClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setDummyNotice(true);
    setTimeout(() => setDummyNotice(false), 4500);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden w-full bg-[#070709] text-[#F1F1F4] selection:bg-gym-crimson selection:text-white">
      
      {/* Dynamic Background Atmosphere System */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle Luxury Matrix Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-80" />
        
        {/* Layered Volumetric Light Auras */}
        <div className="absolute inset-0 radial-aura-top" />
        <div className="absolute inset-0 radial-aura-mid" />
        <div className="absolute inset-0 radial-aura-bottom" />
        
        {/* Subtle Atmospheric Light Spheres */}
        <div className="absolute top-[18%] left-[10%] w-[500px] h-[500px] bg-gym-crimson/5 rounded-full blur-[140px]" />
        <div className="absolute top-[52%] right-[5%] w-[600px] h-[600px] bg-gym-crimson/8 rounded-full blur-[160px]" />
        <div className="absolute top-[80%] left-[15%] w-[550px] h-[550px] bg-amber-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        <Navbar onDummyWhatsApp={handleWhatsAppClick} />
        
        <main className="overflow-x-hidden w-full max-w-full">
          <Hero onDummyWhatsApp={handleWhatsAppClick} />
          <About />
          <Programs onDummyWhatsApp={handleWhatsAppClick} />
          <Schedule />
          <Trainers />
          <Memberships onDummyWhatsApp={handleWhatsAppClick} />
          <Testimonials />
          <Contact onDummyWhatsApp={handleWhatsAppClick} />
        </main>

        <Footer onDummyWhatsApp={handleWhatsAppClick} />
      </div>
      
      {/* Precision Floating WhatsApp Button (Dummy Mode) */}
      <button 
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-[#121216]/90 backdrop-blur-xl border border-white/15 hover:border-gym-crimson text-white p-3.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-105 flex items-center justify-center group cursor-pointer"
        aria-label={`Inquire ${gymDetails.name} on WhatsApp`}
      >
        <MessageSquare size={19} className="text-white group-hover:text-gym-crimson transition-colors" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-[11px] font-bold uppercase tracking-wider pl-0 group-hover:pl-2 text-white">
          Inquire (Demo)
        </span>
      </button>

      {/* Floating Feedback Notice */}
      {dummyNotice && (
        <div className="fixed bottom-24 right-6 z-50 bg-[#14141A]/95 border border-white/10 shadow-2xl p-4 rounded-2xl text-white text-xs max-w-sm flex items-start gap-3 backdrop-blur-xl">
          <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-gym-crimson shrink-0">
            <CheckCircle2 size={14} />
          </div>
          <div>
            <p className="font-bold text-white uppercase tracking-wider mb-0.5 text-[11px]">Demo Mode Active</p>
            <p className="text-gym-muted leading-relaxed font-normal text-[11px]">
              WhatsApp inquiry captured. External redirection is disabled in demo mode.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App;
