import React, { useEffect, useRef } from 'react';
import { schedule, gymDetails } from '../data/gymData';
import { Clock } from 'lucide-react';
import gsap from 'gsap';

const Schedule = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.schedule-row',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.06,
          duration: 0.6,
          ease: 'power2.out',
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
      id="schedule" 
      className="py-32 md:py-40 px-4 sm:px-6 bg-[#0A0A0C] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gym-crimson mb-2 block">
            Timetable & Protocols
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
            Training Routine
          </h2>
          <p className="text-gym-muted text-xs sm:text-sm">
            Structured workout splits and operating sessions at {gymDetails.name} Madurai.
          </p>
        </div>

        {/* Double-Bezel Table Architecture */}
        <div className="double-bezel-outer p-1.5">
          <div className="double-bezel-inner overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="py-4 px-6 uppercase text-[11px] font-bold tracking-wider text-gym-crimson">Day</th>
                    <th className="py-4 px-6 uppercase text-[11px] font-bold tracking-wider text-gym-muted">Morning Phase</th>
                    <th className="py-4 px-6 uppercase text-[11px] font-bold tracking-wider text-gym-muted">Evening Phase</th>
                    <th className="py-4 px-6 uppercase text-[11px] font-bold tracking-wider text-white">Target Split</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {schedule.map((item, idx) => {
                    const isRest = item.day === 'Sunday';

                    return (
                      <tr 
                        key={idx}
                        className={`schedule-row transition-colors hover:bg-white/[0.02] ${isRest ? 'bg-black/30 text-white/30' : ''}`}
                      >
                        <td className="py-4 px-6 font-bold text-white text-xs sm:text-sm">
                          <div className="flex items-center gap-2.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${isRest ? 'bg-white/20' : 'bg-gym-crimson'}`} />
                            <span>{item.day}</span>
                          </div>
                        </td>

                        <td className="py-4 px-6 text-xs text-white/70 font-medium">
                          <div className="flex items-center gap-1.5">
                            <Clock size={13} className="text-gym-muted" />
                            <span>{item.morning}</span>
                          </div>
                        </td>

                        <td className="py-4 px-6 text-xs text-white/70 font-medium">
                          <div className="flex items-center gap-1.5">
                            <Clock size={13} className="text-gym-muted" />
                            <span>{item.evening}</span>
                          </div>
                        </td>

                        <td className="py-4 px-6">
                          <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold ${
                            isRest 
                              ? 'bg-white/5 text-white/40' 
                              : 'bg-white/[0.04] text-white border border-white/10'
                          }`}>
                            {item.focus}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Schedule;
