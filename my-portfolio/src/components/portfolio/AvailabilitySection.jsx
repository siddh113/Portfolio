import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function AvailabilitySection() {
  return (
    <section id="availability" className="pb-24 md:pb-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(250, 204, 21, 0.06), transparent 45%),
              radial-gradient(circle at 80% 30%, rgba(168, 85, 247, 0.06), transparent 45%)
            `,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 md:p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-6">
                <div>
                  <p className="text-xs tracking-widest text-zinc-500 uppercase">Current Availability</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="space-y-2">
                    <p className="text-sm text-zinc-400">Response Time</p>
                    <p className="text-white font-semibold">&lt; 24 hours</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-zinc-400">Timezone</p>
                    <p className="text-white font-semibold">EST (UTC-5)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-zinc-400">Work Type</p>
                    <p className="text-white font-semibold">Remote &amp; On-site</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-sm whitespace-nowrap">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                Available
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 md:p-8 shadow-2xl"
          >
            <div className="space-y-6">
              <p className="text-xs tracking-widest text-zinc-500 uppercase">
                Location &amp; Work Preferences
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-zinc-400">Current Location</span>
                  <span className="text-white font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-zinc-500" />
                    New York, USA
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-zinc-400">Work Style</span>
                  <span className="text-white font-semibold">Remote &amp; On-site</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-zinc-400">Travel</span>
                  <span className="text-white font-semibold">Open to relocation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
