"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle } from "lucide-react";

const education = [
  {
    institution: "Toulouse Business School, Barcelona",
    degree: "MSc Digital Marketing & Analytics",
    period: "Expected Oct 2026",
    specialization: "AI-Driven Digital Marketing & Analytics",
    icon: <GraduationCap className="text-primary" size={24} />,
  },
  {
    institution: "Universidad de La Salle, Colombia",
    degree: "BSc Finance and International Trade",
    period: "2018 – 2022",
    details: "GPA: 8.36/10, Ranked 2nd in class",
    icon: <GraduationCap className="text-secondary" size={24} />,
  },
];

const certifications = [
  { name: "HubSpot Marketing Hub Software", date: "Feb 2026", issuer: "HubSpot" },
  { name: "Google Ads Display", date: "Dec 2025", issuer: "Google" },
  { name: "Google Ads Search", date: "Dec 2025", issuer: "Google" },
  { name: "Digital Marketing Certification", date: "Jul 2025", issuer: "SENA Colombia" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display text-foreground mb-12 flex items-center gap-4">
              <GraduationCap size={32} className="text-primary" /> Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-primary before:to-muted before:rounded-full">
                  <h3 className="text-2xl font-display text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground font-medium mb-3 tracking-wide">{edu.period}</p>
                  <p className="text-muted-foreground italic">{edu.specialization || edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display text-foreground mb-12 flex items-center gap-4">
              <Award size={32} className="text-secondary" /> Certifications
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-muted/20 border border-muted hover:border-secondary hover:bg-white transition-all group"
                >
                  <CheckCircle size={20} className="text-secondary mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <h4 className="font-bold text-foreground mb-1">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
