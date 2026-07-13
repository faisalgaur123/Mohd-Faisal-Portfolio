import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Next.js", "Redux Toolkit", "Three.js", "Framer Motion", "Git", "REST APIs"];

  return (
    <section id="skills" className="relative py-28 bg-brand-panel text-center">
      <div className="container mx-auto w-[min(1120px,92vw)] max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-brand-teal inline-flex justify-center items-center gap-2.5 before:content-[''] before:w-[26px] before:h-[1px] before:bg-brand-teal before:opacity-60 after:content-[''] after:w-[26px] after:h-[1px] after:bg-brand-teal after:opacity-60 mb-6"
        >
          Skills
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-semibold mb-16"
        >
          My <span className="gradient-text">Toolkit</span>.
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 glass-panel rounded-full text-brand-text font-medium hover:text-brand-teal hover:border-brand-teal/50 transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
