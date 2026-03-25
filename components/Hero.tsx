"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-soft -z-10" />
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20"
          >
            Digital Marketing & Analytics
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-display text-foreground leading-tight mb-6"
          >
            I&apos;m <span className="text-transparent bg-clip-text bg-gradient-main">Daniela Velasquez</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10"
          >
            Multidisciplinary professional with a background in Finance, currently 
            specializing in AI-Driven Digital Marketing & Data Analytics at TBS Barcelona. 
            Designing data-driven strategies that move brands forward.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </button>
            <a
              href="/Daniela_Velasquez_CV.pdf"
              className="btn-outline flex items-center gap-2"
              download
            >
              Download CV <Download size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
            <Image 
              src="/images/profile.png" 
              alt="Yenny Daniela Velasquez Paternina" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 p-6 glass-card rounded-2xl animate-fade-up">
            <div className="text-secondary font-bold text-3xl">GPA 8.36</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Academic Excellence</div>
          </div>
          
          <div className="absolute -top-6 -right-6 p-6 glass-card rounded-2xl animate-fade-up [animation-delay:400ms]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              <div className="font-semibold text-foreground">Open to Internships</div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Barcelona, Spain</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
