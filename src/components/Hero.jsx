import { motion } from "framer-motion";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section id="hero" className="relative p-0 min-h-screen flex items-center">
      {/* Background overlay gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-brand-panel-2)_0%,transparent_60%)] opacity-60"></div>
      
      {/* R3F Canvas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <HeroScene />
      </div>

      <div className="container relative z-20 w-[min(1120px,92vw)] mx-auto mt-20 pointer-events-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-brand-teal inline-flex items-center gap-2.5 before:content-[''] before:w-[26px] before:h-[1px] before:bg-brand-teal before:opacity-60 mb-6"
        >
          Frontend Developer · React Specialist
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-semibold mb-4 leading-[1.1]"
        >
          <img src="/coding.png" alt="Developer" className="inline-block w-[1em] h-[1em] align-middle mr-[0.3em] mb-[0.1em]" />
          Mohd <span className="gradient-text">Faisal</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-brand-text-dim max-w-2xl font-light mb-6"
        >
          Building interfaces with precision &amp; motion.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base text-brand-text-faint max-w-lg mb-10 leading-relaxed"
        >
          A frontend developer with ~2 years of experience crafting fast, accessible and
          delightful web apps with React, TypeScript and JavaScript.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="px-6 py-3 bg-brand-indigo text-white rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-[0_0_20px_var(--color-brand-glow-indigo)]">
            View Work →
          </a>
          <a href="#contact" className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors">
            Get in Touch
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 text-brand-text-faint">
        <div className="w-[22px] h-[36px] rounded-full border-2 border-brand-text-faint/50 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 rounded-full bg-brand-text-faint/80" 
          />
        </div>
        <span className="text-[0.65rem] uppercase tracking-widest font-medium">Scroll</span>
      </div>
    </section>
  );
}
