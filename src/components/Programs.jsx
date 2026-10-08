import React, { useEffect, useRef } from 'react';
import { programs } from '../data/gymData';
import { Dumbbell, UserCircle, Users, Activity, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

const iconMap = {
  Dumbbell: Dumbbell,
  UserCircle: UserCircle,
  Users: Users,
  Activity: Activity
};

const bentoSpans = [
  "lg:col-span-8 lg:row-span-1",
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1"
];

const programImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

const Programs = ({ onDummyWhatsApp }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bento-item',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="programs" 
      className="py-32 md:py-40 px-4 sm:px-6 bg-[#0E0E12] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gym-crimson mb-3 block">
              Disciplines & Protocols
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Specialized Programs
            </h2>
          </div>
          <p className="text-gym-muted text-xs sm:text-sm max-w-sm font-normal">
            Every routine is backed by structured progression, biomechanical precision, and form accountability.
          </p>
        </div>

        {/* Gapless Mathematically Interlocking Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-flow-dense gap-5 auto-rows-[280px]">
          {programs.map((program, idx) => {
            const Icon = iconMap[program.icon] || Dumbbell;
            const spanClass = bentoSpans[idx] || "lg:col-span-6";
            const bgImg = programImages[idx];

            return (
              <div 
                key={program.id}
                className={`bento-item ${spanClass} double-bezel-outer p-1.5`}
              >
                <div className="double-bezel-inner relative overflow-hidden flex flex-col justify-end p-7 group">
                  
                  {/* Clean Background Image */}
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-fluid group-hover:scale-105 opacity-30 group-hover:opacity-40"
                    style={{ backgroundImage: `url("${bgImg}")` }}
                  />
                  
                  {/* Dark Vignette Wash */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/85 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-3 group-hover:bg-gym-crimson group-hover:border-gym-crimson transition-colors duration-500">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-xl font-bold uppercase text-white mb-1.5 group-hover:text-gym-crimson transition-colors">
                      {program.title}
                    </h3>

                    <p className="text-gym-muted text-xs leading-relaxed max-w-md mb-4 font-normal">
                      {program.description}
                    </p>

                    <button
                      onClick={onDummyWhatsApp}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white/80 hover:text-gym-crimson transition-colors cursor-pointer"
                    >
                      <span>Inquire Protocol</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Programs;
