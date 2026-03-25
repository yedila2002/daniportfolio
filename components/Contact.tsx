"use client";

import { motion } from "framer-motion";
import { Send, Mail, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    businessType: "Gym",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! Daniela will get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/10 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display text-foreground leading-tight mb-8">
              Let&apos;s <span className="text-secondary italic">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body mb-12">
              Currently seeking a 6-month internship in Digital Marketing & Analytics. 
              Always open to discussing new projects or creative opportunities.
            </p>

            <div className="space-y-6">
              <a href="https://www.linkedin.com/in/daniela-velasquez-/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors text-lg group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform border border-muted">
                  <Mail size={20} className="text-primary" />
                </div>
                Send me an Email
              </a>
              <a href="https://www.linkedin.com/in/daniela-velasquez-/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors text-lg group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform border border-muted">
                  <Linkedin size={20} className="text-[#0077B5]" />
                </div>
                Connect on LinkedIn
              </a>
              
              <div className="pt-8 text-sm text-muted-foreground flex flex-col gap-2">
                <p>Based in Barcelona, Spain</p>
                <p>Open to international opportunities</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 glass-card rounded-[48px] border border-white"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Your Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full bg-white border border-muted rounded-2xl px-6 py-4 font-body focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full bg-white border border-muted rounded-2xl px-6 py-4 font-body focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Inquiry Type</label>
                <select 
                  className="w-full bg-white border border-muted rounded-2xl px-6 py-4 font-body focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                  value={formState.businessType}
                  onChange={(e) => setFormState({...formState, businessType: e.target.value})}
                >
                  <option>Internship Opportunity</option>
                  <option>Collaboration</option>
                  <option>Project Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  required
                  placeholder="How can I help you?"
                  rows={4}
                  className="w-full bg-white border border-muted rounded-2xl px-6 py-4 font-body focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full btn-primary py-5 flex items-center justify-center gap-3 group"
              >
                Send Message 
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
