import React, { useEffect, useRef } from 'react';
import { trainers } from '../data/gymData';
import { Award, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

const Trainers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.trainer-card',
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
      id="trainers" 
      className="py-32 md:py-40 px-4 sm:px-6 bg-[#0E0E12] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gym-crimson mb-3 block">
              Certified Faculty
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Dedicated Coaches
            </h2>
          </div>
          <p className="text-gym-muted text-xs sm:text-sm max-w-sm font-normal">
            Every trainer is certified in progressive overload, biomechanics, and targeted nutrition protocols.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <div 
              key={trainer.id}
              className="trainer-card double-bezel-outer p-1.5"
            >
              <div className="double-bezel-inner overflow-hidden flex flex-col justify-between group">
                <div>
                  {/* Portrait with fluid zoom */}
                  <div className="aspect-[4/4] overflow-hidden relative">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-fluid"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent opacity-90" />
                    
                    {/* Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="bg-[#121216]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-white/90 border border-white/10 flex items-center gap-1.5 shadow-sm">
                        <Award size={12} className="text-gym-crimson" />
                        Instructor
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold uppercase text-white mb-0.5 group-hover:text-gym-crimson transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gym-crimson mb-3">
                      {trainer.specialty}
                    </p>
                    <p className="text-gym-muted text-xs leading-relaxed font-normal">
                      {trainer.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-1">
                  <a 
                    href="#contact"
                    className="w-full py-2.5 rounded-full bg-white/[0.04] hover:bg-white hover:text-black border border-white/5 text-white/80 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <span>Book Consultation</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trainers;
