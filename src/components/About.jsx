import React, { useEffect, useRef } from 'react';
import { gymDetails } from '../data/gymData';
import { Shield, Target, Zap } from 'lucide-react';
import gsap from 'gsap';

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll('.scrub-word');
      if (words && words.length > 0) {
        gsap.fromTo(words,
          { opacity: 0.2 },
          {
            opacity: 1,
            stagger: 0.08,
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              end: 'bottom 45%',
              scrub: true,
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const statement = "We built Calorie on the uncompromising premise that proper conditioning demands zero friction, clean biomechanical machinery, and absolute privacy.";

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-32 md:py-40 px-4 sm:px-6 bg-[#0A0A0C] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Editorial Text Scrub */}
        <div className="mb-24 max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gym-crimson mb-4 block">
            The Philosophy
          </span>
          <p 
            ref={textRef}
            className="text-2xl sm:text-4xl md:text-[2.6rem] font-bold uppercase tracking-tight text-white leading-tight"
          >
            {statement.split(" ").map((w, i) => (
              <span key={i} className="scrub-word inline-block mr-2.5">
                {w}
              </span>
            ))}
          </p>
        </div>

        {/* 2-Column Split: Hardware Cards & Image Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Double-Bezel Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="double-bezel-outer">
              <div className="double-bezel-inner p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gym-crimson shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold uppercase text-white mb-1">Dual Private Floors</h3>
                  <p className="text-xs text-gym-muted leading-relaxed">
                    2nd floor exclusively for women with specialized toning machines. 3rd floor equipped for heavy male powerlifting and hypertrophy.
                  </p>
                </div>
              </div>
            </div>

            <div className="double-bezel-outer">
              <div className="double-bezel-inner p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold uppercase text-white mb-1">True Biomechanics</h3>
                  <p className="text-xs text-gym-muted leading-relaxed">
                    Plate-loaded and selectorized machines calibrated for clean resistance curves, preserving joint health under heavy loads.
                  </p>
                </div>
              </div>
            </div>

            <div className="double-bezel-outer">
              <div className="double-bezel-inner p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gym-crimson shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold uppercase text-white mb-1">All-Day Accessibility</h3>
                  <p className="text-xs text-gym-muted leading-relaxed">
                    Continuous 15+ daily operating hours (5:30 AM – 9:00 PM). Train before morning commitments or during late evening unwinding.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Double-Bezel Image Showcase */}
          <div className="lg:col-span-6">
            <div className="double-bezel-outer">
              <div className="double-bezel-inner overflow-hidden relative group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={gymDetails.aboutImage || "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"} 
                    alt="Calorie Gym floor layout"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-fluid"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="bg-[#121216]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="block text-2xl font-black text-white">{gymDetails.location}</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gym-muted">Facility Location</span>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <span className="block text-2xl font-black text-gym-crimson">₹500</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gym-muted">Monthly Access</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
