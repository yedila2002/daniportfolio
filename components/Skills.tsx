"use client";

import { motion } from "framer-motion";
import { Laptop, Heart, Globe } from "lucide-react";

const skillGroups = [
  {
    title: "Hard Skills",
    icon: <Laptop className="text-primary" size={28} />,
    color: "bg-primary/5",
    skills: [
      "Excel (Advanced)", "Power BI", "Tableau", "R Studio", "Python", 
      "Canva", "Figma", "CapCut", "Google Analytics", "HubSpot"
    ],
  },
  {
    title: "Soft Skills",
    icon: <Heart className="text-secondary" size={28} />,
    color: "bg-secondary/5",
    skills: [
      "Analytical Thinking", "Attention to Detail", 
      "Cross-functional Collaboration", "Adaptability", "Creative Thinking"
    ],
  },
  {
    title: "Languages",
    icon: <Globe className="text-accent" size={28} />,
    color: "bg-accent/5",
    skills: [
      "Spanish (Native)", "English (C1 - Advanced)", "French (Basic)"
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">My Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining technical proficiency with analytical depth and a creative edge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`p-8 rounded-[32px] border border-muted glass-card hover:shadow-2xl transition-all duration-500 group`}
            >
              <div className={`w-14 h-14 ${group.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {group.icon}
              </div>
              <h3 className="text-2xl font-display text-foreground mb-6">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-white border border-muted rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
