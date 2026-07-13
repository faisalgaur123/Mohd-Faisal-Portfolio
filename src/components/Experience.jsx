import { motion } from "framer-motion";

const experiences = [
  {
    date: "2025 — PRESENT",
    role: "Frontend Developer",
    company: "Oranks Infotech",
    list: [
      "Led development of a React + TypeScript dashboard used by 10k+ users daily.",
      "Cut initial load time by 40% through code-splitting and memoization.",
      "Built a reusable component library adopted across 3 internal products.",
    ],
  },
  {
    date: "2024 — 2025",
    role: "Frontend Developer Trainee",
    company: "Softmind Technologies",
    list: [
      "Delivered responsive React interfaces from Figma designs pixel-perfectly.",
      "Integrated REST APIs and managed global state with Redux Toolkit.",
      "Collaborated with backend engineers to streamline API contracts.",
    ],
  },
  {
    date: "2023",
    role: "Web Developer Intern",
    company: "Freelance / Open Source",
    list: [
      "Shipped multiple client landing pages with JavaScript and modern CSS.",
      "Contributed to open source frontend components and fixed critical bugs.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28" style={{ background: "#0a0d14" }}>
      <div className="container mx-auto w-[min(1120px,92vw)]">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="w-8 h-px bg-[#00e5c7] opacity-70" />
          <span className="font-mono text-xs tracking-[0.28em] uppercase text-[#00e5c7]">Experience</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-6xl font-bold text-white mb-16 leading-tight"
        >
          Where I've <span style={{ background: "linear-gradient(120deg,#6e7bff,#00e5c7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>worked</span>.
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #6e7bff 0%, #4f5de0 50%, transparent 100%)" }} />

          <div className="flex flex-col gap-14">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14"
              >
                {/* Circle dot */}
                <div
                  className="absolute left-[10px] top-[6px] w-[18px] h-[18px] rounded-full border border-[#6e7bff] flex items-center justify-center"
                  style={{ background: "#0a0d14" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e7bff]" />
                </div>

                {/* Date */}
                <div className="font-mono text-xs font-semibold tracking-widest text-[#00e5c7] mb-2 uppercase">
                  {exp.date}
                </div>

                {/* Role */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {exp.role}
                </h3>

                {/* Company */}
                <div className="text-[#9aa4bd] text-base mb-5">{exp.company}</div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {exp.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#9aa4bd] text-sm md:text-base leading-relaxed">
                      <span className="text-[#6e7bff] mt-0.5 text-base leading-none select-none">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
