"use client";

import { motion } from "framer-motion";
import { Coffee, Camera, Video, Brush, Waves } from "lucide-react";
import Image from "next/image";

const hobbies = [
  { icon: <Waves size={20} />, label: "Swimming" },
  { icon: <Brush size={20} />, label: "Arts & Crafts" },
  { icon: <Brush size={20} />, label: "Drawing" },
  { icon: <Video size={20} />, label: "Video Editing" },
  { icon: <Camera size={20} />, label: "Photography" },
];

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "C1 (Advanced)" },
  { name: "French", level: "Basic" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[32px] overflow-hidden border-4 border-muted shadow-xl relative group">
              <Image 
                src="/images/presentation.png" 
                alt="Daniela presenting Social Media Strategy" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Soft accent shape */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-8">
              A Multidisciplinary <span className="text-primary italic">Strategist</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-body mb-10">
              <p>
                Based in the vibrant city of **Barcelona**, I am a Digital Marketing & Analytics professional 
                with a solid foundation in Finance and International Trade. My journey has always been 
                driven by a passion for understanding market dynamics and translating data into 
                compelling brand stories.
              </p>
              <p>
                Currently, I am pursuing my **MSc in Digital Marketing and Data Analytics** at 
                TBS Education, where I specialize in AI-driven strategies and performance metrics. 
                I believe that the best marketing combines creative intuition with rigorous 
                analytical proof.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-display text-foreground mb-4 flex items-center gap-2">
                  <Coffee size={20} className="text-secondary" /> Languages
                </h3>
                <div className="space-y-3">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-muted/30 rounded-xl border border-muted">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-sm text-primary font-semibold">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display text-foreground mb-4">Hobbies & Passion</h3>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-muted rounded-full text-sm font-medium text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                    >
                      {hobby.icon} {hobby.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
