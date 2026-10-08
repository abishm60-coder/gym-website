import React, { useEffect, useRef } from 'react';
import { memberships, gymDetails } from '../data/gymData';
import { Check, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

const Memberships = ({ onDummyWhatsApp }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.membership-card',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
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
      id="memberships" 
      className="py-32 md:py-40 px-4 sm:px-6 bg-[#0A0A0C] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gym-crimson mb-2 block">
            Direct Memberships
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
            Membership Plans
          </h2>
          <p className="text-gym-muted text-xs sm:text-sm">
            Straightforward month-to-month access to elite equipment in {gymDetails.location}.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {memberships.map((plan) => (
            <div 
              key={plan.id}
              className={`membership-card double-bezel-outer p-1.5 ${plan.popular ? 'border-gym-crimson/40 bg-gym-crimson/[0.04]' : ''}`}
            >
              <div className="double-bezel-inner p-7 flex flex-col justify-between relative h-full">
                
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gym-crimson text-white text-[9px] font-black uppercase tracking-widest">
                    Recommended
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold uppercase text-white mb-2 tracking-tight">
                    {plan.name}
                  </h3>

                  <div className="mb-3">
                    <span className="text-3xl sm:text-4xl font-black text-white">{plan.price.split(' ')[0]}</span>
                    <span className="text-xs font-semibold text-gym-muted"> {plan.price.split(' ').slice(1).join(' ')}</span>
                  </div>

                  {plan.admission && (
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gym-crimson mb-6 pb-4 border-b border-white/5">
                      {plan.admission}
                    </p>
                  )}

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center text-gym-crimson shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="text-xs text-white/70 leading-relaxed font-normal">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={onDummyWhatsApp}
                    className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      plan.popular 
                        ? 'bg-gym-crimson hover:bg-red-700 text-white' 
                        : 'bg-white text-black hover:bg-gym-crimson hover:text-white'
                    }`}
                  >
                    <span>Inquire Protocol</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Memberships;
