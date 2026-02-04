import React from 'react';
import { motion } from 'framer-motion';

const expertiseGroups = [
  {
    title: 'Full Stack Development',
    items: [
      'JavaScript / TypeScript',
      'React / Next.js',
      'Node.js / Express',
      'C# / .NET APIs',
      'Python (Flask / FastAPI)',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Data Engineering & ETL',
    items: [
      'SQL (PostgreSQL, SQL Server)',
      'Azure Data Factory',
      'Microsoft Fabric',
      'ETL Pipelines',
      'Data Modeling & Joins',
      'Power BI (Analytics Layer)',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'Azure',
      'AWS (Core Services)',
      'Docker',
      'CI/CD Pipelines',
      'Git & GitHub Actions',
    ],
  },
  {
    title: 'AI & Applied Machine Learning',
    items: [
      'Python',
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'Hugging Face',
      'LLM Integration (APIs, Prompting, RAG)',
    ],
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(250, 204, 21, 0.08), transparent 45%),
              radial-gradient(circle at 80% 30%, rgba(168, 85, 247, 0.08), transparent 45%),
              radial-gradient(circle at 30% 80%, rgba(59, 130, 246, 0.06), transparent 45%)
            `,
          }}
        />
      </div>
      <div className="absolute top-10 right-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-16 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-widest text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20">
            TOOLKIT
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Technical <span className="font-semibold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Technologies and frameworks I work with regularly
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {expertiseGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="space-y-4"
            >
              <h3 className="text-base font-semibold text-white tracking-wide">
                {group.title}
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
