"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Multiflora CI S.A.S",
    role: "Commercial Assistant (Bilingual)",
    period: "Jun – Nov 2024",
    location: "Miami & Colombia",
    points: [
      "Order processing and dispatch coordination between Miami and Colombia.",
      "Generated daily reports and managed inventory balance.",
      "Coordinated seasonal product launches, SKU updates, and pricing strategies.",
      "Facilitated cross-team communication between sales, suppliers, and marketing."
    ],
  },
  {
    company: "Arcos BPO",
    role: "Customer Support Specialist (Bilingual)",
    period: "Mar 2023 – Apr 2024",
    location: "Remote/Bilingual",
    points: [
      "Managed CRM databases for hundreds of customer profiles with high accuracy.",
      "Achieved a 95% same-day onboarding completion rate.",
      "Implemented lead follow-up routines that reduced drop-off rates by approximately 90%."
    ],
  },
  {
    company: "Macroscope Chile",
    role: "Marketing Assistant Internship",
    period: "Jul 2021 – Jan 2022",
    location: "Remote",
    points: [
      "Developed visual materials including presentations, reports, and graphic assets.",
      "Conducted market research and produced bilateral trade reports.",
      "Managed client satisfaction surveys via email and phone."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">Professional Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gaining diverse experience in commerce, customer success, and marketing across international borders.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md -translate-x-1/2 z-10" />

              <div className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"}`}>
                <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <div className={`p-8 glass-card rounded-[32px] hover:shadow-xl transition-all duration-500 border border-muted`}>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2 uppercase tracking-wider justify-start md:justify-inherit">
                      <Briefcase size={16} /> {exp.role}
                    </div>
                    <h3 className="text-2xl font-display text-foreground mb-1">{exp.company}</h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-6 justify-start md:justify-inherit">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                    </div>
                    <ul className={`space-y-3 text-left ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex gap-3 text-muted-foreground font-body">
                          <div className={`mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0 ${index % 2 === 0 ? "md:hidden" : ""}`} />
                          <p className="flex-1">{point}</p>
                          <div className={`mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0 hidden md:block ${index % 2 !== 0 ? "md:hidden" : ""}`} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"} hidden md:block pt-8`}>
                  {/* Empty space for timeline alignment or can add date labels here */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
