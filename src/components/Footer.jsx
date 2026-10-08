import React from 'react';
import { gymDetails } from '../data/gymData';
import { ArrowUpRight } from 'lucide-react';

const Footer = ({ onDummyWhatsApp }) => {
  return (
    <footer className="bg-[#0A0A0C] border-t border-white/5 pt-20 pb-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Architectural Double-Bezel CTA Banner */}
        <div className="double-bezel-outer p-1.5 mb-16">
          <div className="double-bezel-inner p-8 sm:p-12 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gym-crimson mb-2 block">
              Orientation
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
              Schedule Your Facility Walkthrough
            </h2>
            <p className="text-gym-muted text-xs sm:text-sm max-w-lg mx-auto mb-8 font-normal leading-relaxed">
              Experience the dual floor layout, evaluate biomechanical machinery, and meet our coaching staff in Madurai.
            </p>
            <button
              onClick={onDummyWhatsApp}
              className="group rounded-full bg-white text-[#0A0A0C] pl-6 pr-2 py-2 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-3 transition-all duration-500 ease-fluid active:scale-[0.98] hover:bg-gym-crimson hover:text-white cursor-pointer"
            >
              <span>Schedule Walkthrough</span>
              <div className="w-7 h-7 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={14} />
              </div>
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-black text-xs">
                C
              </div>
              <span className="font-heading font-black text-lg tracking-tight text-white uppercase">
                {gymDetails.name}
              </span>
            </div>
            <p className="text-gym-muted text-xs max-w-sm leading-relaxed mb-5 font-normal">
              State-of-the-art unisex gym facility in {gymDetails.location}. Dedicated floors for men and women, premium machines, and expert coaching.
            </p>
            <div className="flex gap-2">
              <a 
                href={gymDetails.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[11px] text-gym-muted hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a 
                href={gymDetails.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[11px] text-gym-muted hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a 
                href={gymDetails.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[11px] text-gym-muted hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-3">Navigation</h4>
            <ul className="space-y-2 text-xs text-gym-muted">
              <li><a href="#about" className="hover:text-white transition-colors">Architecture</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Disciplines</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Timetable</a></li>
              <li><a href="#trainers" className="hover:text-white transition-colors">Coaches</a></li>
              <li><a href="#memberships" className="hover:text-white transition-colors">Memberships</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-3">Madurai Center</h4>
            <p className="text-xs text-gym-muted leading-relaxed mb-2">
              {gymDetails.address}
            </p>
            <p className="text-xs text-white/80 font-medium">
              {gymDetails.phone}
            </p>
            <p className="text-[11px] text-gym-crimson mt-2 font-semibold">
              Mon – Sat: 5:30 AM – 9:00 PM
            </p>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-white/30">
          <p>© {new Date().getFullYear()} {gymDetails.name} Athletic Center. All rights reserved.</p>
          <p>Engineered for Physical Performance • {gymDetails.location}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
