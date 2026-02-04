import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Github, FileText } from 'lucide-react';

const contactCards = [
  {
    title: 'Email',
    subtitle: 'Best for project inquiries',
    href: 'mailto:siddharthketan@gmail.com',
    icon: Mail,
  },
  {
    title: 'LinkedIn',
    subtitle: 'Professional networking',
    href: 'https://www.linkedin.com/in/siddharthkenia/',
    icon: Linkedin,
  },
  {
    title: 'GitHub',
    subtitle: 'Code repositories',
    href: 'https://github.com/siddh113',
    icon: Github,
  }
];

const lookingFor = [
  'Full Stack Software Engineering Roles',
  'Data Engineering & ETL Projects',
  'Applied AI & ML Development',
  'Cloud-Based System Design',
  'Product-Focused Engineering Teams',
  'Open Source & Real-World Project collaborations',
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(250, 204, 21, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(250, 204, 21, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: 'perspective(1000px) rotateX(60deg) translateZ(-300px)',
            transformOrigin: 'center center',
          }}
        />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {contactCards.map((card, index) => (
                <motion.a
                  key={card.title}
                  href={card.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-amber-500/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-200">
                      <card.icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">{card.title}</p>
                    <p className="mt-2 text-sm text-zinc-300">{card.subtitle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-widest text-zinc-500 uppercase mb-4">
              What I'm looking for
            </p>
            <div className="space-y-3">
              {lookingFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-200"
                >
                  <span className="h-2 w-2 rounded-full bg-zinc-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}