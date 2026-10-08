import React, { useState } from 'react';
import { gymDetails } from '../data/gymData';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Contact = ({ onDummyWhatsApp }) => {
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSimulatedSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setFormStatus(null), 6000);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      alert('Please enter your name first');
      return;
    }
    if (onDummyWhatsApp) {
      onDummyWhatsApp(e);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40 px-4 sm:px-6 bg-[#0A0A0C] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gym-crimson mb-2 block">
            Location & Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
            Visit Our Center
          </h2>
          <p className="text-gym-muted text-xs sm:text-sm">
            Walk into our facility in {gymDetails.location} or book a preliminary walkthrough.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Information & Map Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="double-bezel-outer p-1.5">
              <div className="double-bezel-inner p-6 space-y-5">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gym-crimson shrink-0">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gym-muted mb-0.5">Facility Location</h4>
                    <p className="text-white font-medium text-xs sm:text-sm leading-snug">{gymDetails.address}</p>
                    <p className="text-gym-crimson text-[11px] font-semibold mt-1">2nd Floor: Women • 3rd Floor: Men</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/5 pt-4">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                    <Phone size={17} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gym-muted mb-0.5">Telephone</h4>
                    <p className="text-white font-medium text-xs sm:text-sm">{gymDetails.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/5 pt-4">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                    <Mail size={17} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gym-muted mb-0.5">Email</h4>
                    <p className="text-white font-medium text-xs sm:text-sm">{gymDetails.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/5 pt-4">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                    <Clock size={17} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gym-muted mb-0.5">Operating Hours</h4>
                    <p className="text-white font-medium text-xs sm:text-sm">Mon – Sat: {gymDetails.hours.weekdays}</p>
                    <p className="text-[11px] text-white/40">{gymDetails.hours.sunday}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="double-bezel-outer p-1.5">
              <div className="double-bezel-inner overflow-hidden">
                <iframe
                  title={`${gymDetails.name} Location`}
                  src={gymDetails.googleMapsEmbed}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-125 opacity-75"
                />
                <div className="p-3 bg-[#121216] flex items-center justify-between border-t border-white/5">
                  <span className="text-[11px] font-semibold text-white/70">
                    {gymDetails.location}, Tamil Nadu
                  </span>
                  <a
                    href={gymDetails.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-gym-crimson hover:text-white uppercase tracking-wider"
                  >
                    Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 double-bezel-outer p-1.5">
            <div className="double-bezel-inner p-7 sm:p-8">
              <h3 className="text-xl font-bold uppercase text-white mb-1 tracking-tight">
                Direct Message
              </h3>
              <p className="text-gym-muted text-xs mb-6">
                Submit your inquiry below. A staff member will respond regarding schedule and admissions.
              </p>

              {formStatus === 'success' && (
                <div className="bg-white/5 border border-white/15 text-white px-4 py-3 rounded-xl mb-6 text-xs flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-gym-crimson shrink-0" />
                  <span>Inquiry submitted. Our coach will be in touch shortly.</span>
                </div>
              )}

              <form onSubmit={handleSimulatedSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gym-muted mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-gym-crimson transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gym-muted mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9876543210"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-gym-crimson transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gym-muted mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. you@example.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-gym-crimson transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gym-muted mb-1.5">
                    Fitness Objective / Questions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Tell us what you are aiming to achieve..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-gym-crimson transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 py-3 px-5 rounded-full bg-white text-[#0A0A0C] hover:bg-gym-crimson hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <button
                    type="submit"
                    className="flex-1 py-3 px-5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/10"
                  >
                    <span>Send Message</span>
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
