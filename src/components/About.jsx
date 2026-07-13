import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-brand-bg-soft">
      <div className="container mx-auto w-[min(1120px,92vw)]">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-brand-teal inline-flex items-center gap-2.5 before:content-[''] before:w-[26px] before:h-[1px] before:bg-brand-teal before:opacity-60 mb-6"
        >
          About Me
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-semibold mb-10"
        >
          A brief <span className="gradient-text">intro</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg text-brand-text-dim max-w-3xl leading-relaxed"
        >
          I'm a frontend developer passionate about building accessible, performant, and delightful web applications. With a strong foundation in modern JavaScript and React, I love translating complex design systems into pixel-perfect, interactive code. My focus is always on creating seamless user experiences.
        </motion.p>
      </div>
    </section>
  );
}
