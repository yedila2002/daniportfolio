"use client";

import { motion } from "framer-motion";
import { ExternalLink, BarChart3, PieChart, Layout, Monitor } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Digify Active Website",
    category: "Web Development & Marketing",
    tools: ["HubSpot", "Visual Design"],
    description: "Social Media & Content Management landing page for gyms and fitness brands. Focused on conversion and clarity.",
    image: "/images/digify-screenshot.png",
    link: "#", // Add real link if available
    icon: <Monitor size={20} />
  },
  {
    title: "Social Media Strategy",
    category: "Digital Marketing",
    tools: ["Canva", "Strategic Planning"],
    description: "Full social media strategy project on Canva including visual assets and engagement metrics.",
    image: "https://picsum.photos/seed/canva-project/800/600",
    link: "https://www.canva.com/design/DAG5uoZVE2A/VW1Q1DUqDlD2Ljh7Gec9CQ/edit",
    icon: <PieChart size={20} />
  },
  {
    title: "Data Analysis Project",
    category: "Analytics",
    tools: ["Python", "R Studio", "Tableau"],
    description: "In-depth data analysis with actionable insights and interactive visualizations.",
    image: "https://picsum.photos/seed/data-analysis/800/600",
    link: "#",
    icon: <BarChart3 size={20} />
  },
  {
    title: "UX/UI Design Prototype",
    category: "Design",
    tools: ["Figma", "User Research"],
    description: "User-centric research followed by wireframing and high-fidelity prototyping in Figma.",
    image: "https://picsum.photos/seed/ux-ui/800/600",
    link: "#",
    icon: <Layout size={20} />
  },
  {
    title: "Digital Marketing Campaign",
    category: "Strategy",
    tools: ["Google Ads", "Analytics"],
    description: "Full-funnel campaign strategy with detailed audience segmentation and performance tracking.",
    image: "https://picsum.photos/seed/marketing-campaign/800/600",
    link: "#",
    icon: <PieChart size={20} />
  },
  {
    title: "Interactive Dashboard",
    category: "Analytics",
    tools: ["Power BI", "Tableau"],
    description: "Interactive business intelligence dashboard for real-time performance monitoring.",
    image: "https://picsum.photos/seed/dashboard/800/600",
    link: "#",
    icon: <BarChart3 size={20} />
  }
];

export default function Portfolio() {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">Work That Moves People</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent academic projects and professional initiatives in marketing and data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[32px] overflow-hidden border border-muted hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-3">
                  {project.icon} {project.category}
                </div>
                <h3 className="text-2xl font-display text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="px-2 py-1 bg-muted/50 rounded text-[10px] font-bold text-muted-foreground uppercase">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
