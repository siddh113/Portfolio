import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "MeshWorks",
    location: "Ohio, OH",
    period: "Jan 2025 - Jun 2025",
    description: "Designed and implemented AI driven ETL workflows in Microsoft Fabric to improve data quality, reliability, and processing efficiency. Worked cross functionally as a Full Stack Developer and data engineer to deploy production ready features and optimize AI powered pipelines.",
    highlights: ["Reduced ETL processing time by 30%", "Increased pipeline throughput by 35%", "Implemented CI/CD pipelines", "Improved reporting data quality by 25%"]
  },
  {
    id: 2,
    role: "Junior Software Developer",
    company: "MeshWorks",
    location: "Ohio, OH",
    period: "Sept 2023 - Jun 2024",
    description: "Delivered end to end full stack solutions by diagnosing system issues, building scalable backend APIs, and developing responsive front end interfaces. Improved application performance, reliability, and user engagement across a high traffic production environment.",
    highlights: ["improving load times by 20% for 5,000+ weekly active users", "Streamlined 10+ third party integrations through clear API documentation, cutting partner onboarding time by 30%", "API integration specialist"]
  },
  {
    id: 3,
    role: "Backend Developer Intern",
    company: "Eco Energio",
    location: "Aberdeen, UK",
    period: "May 2021 - Sept 2021",
    description: "Analyzed large scale energy consumption datasets to deliver accurate carbon footprint insights for commercial buildings. Supported data driven sustainability initiatives that improved energy efficiency and reduced emissions across client portfolios.",
    highlights: ["Energy analytics", "Carbon footprint tracking", "Data accuracy optimization"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(250, 204, 21, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(250, 204, 21, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(800px) rotateX(45deg) translateZ(-100px)',
            transformOrigin: 'center center',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-widest text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20">
            CAREER PATH
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Work <span className="font-semibold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line with glow */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent shadow-[0_0_10px_rgba(251,191,36,0.3)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot with 3D effect */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-zinc-950 shadow-[0_0_20px_rgba(251,191,36,0.6)] z-10" />

                {/* Content with 3D card effect */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <motion.div
                    whileHover={{ 
                      y: -8,
                      rotateY: index % 2 === 0 ? -2 : 2,
                      transition: { duration: 0.3 }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className={`bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 group backdrop-blur-sm ${
                      index % 2 === 0 ? 'md:ml-auto' : ''
                    } max-w-xl relative overflow-hidden`}
                  >
                    {/* Card shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`flex items-center gap-3 mb-4 relative ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-amber-400">{exp.company}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 relative">{exp.role}</h3>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-zinc-400 mb-4 relative ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-zinc-300 mb-4 leading-relaxed relative">{exp.description}</p>

                    <div className={`flex flex-wrap gap-2 relative ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.highlights.map((highlight, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/80 rounded-full border border-zinc-700"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}