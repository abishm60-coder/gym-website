import React, { useEffect, useRef } from 'react';
import { testimonials, gymDetails } from '../data/gymData';
import { Star } from 'lucide-react';
import gsap from 'gsap';

const Testimonials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.review-card',
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
      id="testimonials" 
      className="py-32 md:py-40 px-4 sm:px-6 bg-[#0E0E12] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gym-crimson mb-3 block">
              Member Case Notes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Client Feedback
            </h2>
          </div>
          <p className="text-gym-muted text-xs sm:text-sm max-w-sm font-normal">
            Real stories and verified reviews from members who train every day at {gymDetails.name} Gym in {gymDetails.location}.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((review) => (
            <div 
              key={review.id}
              className="review-card double-bezel-outer p-1.5"
            >
              <div className="double-bezel-inner p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-1 text-white/90 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" className="text-white/80" />
                    ))}
                  </div>

                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center font-bold text-xs">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider leading-none mb-0.5">{review.name}</h4>
                    <p className="text-[10px] text-gym-muted font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
