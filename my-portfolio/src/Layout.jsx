import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TimeDisplay from '@/components/portfolio/TimeDisplay';

export default function Layout({ children }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Top Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl shadow-lg border-b border-zinc-800/50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500 text-xs tracking-wider uppercase">Role</span>
              <span className="text-white font-light">Software Engineer</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold shadow-lg shadow-amber-500/50">
                  SK
                </div>
                <TimeDisplay />
              </div>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="hidden sm:flex border-zinc-700 bg-zinc-900/50 text-white hover:bg-zinc-800 hover:border-amber-500/50 transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>

            <div className="hidden md:flex flex-col gap-1 items-end">
              <span className="text-zinc-500 text-xs tracking-wider uppercase">Based In</span>
              <span className="text-white font-light flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                New York, NY
              </span>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}
