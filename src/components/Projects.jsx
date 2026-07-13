import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      icon: "01",
      title: "cvLay",
      desc: "An AI-powered resume builder helping users create professional, ATS-friendly CVs in minutes.",
      tags: ["Next.js", "React", "AI"],
      live: "https://www.cvlay.com/",
      git: "#",
    },
    {
      icon: "02",
      title: "Meer Travels",
      desc: "A premium travel platform offering Umrah and Hajj packages with Saudi visa assistance.",
      tags: ["React", "Tailwind CSS"],
      live: "https://umrahmeertravels.com/",
      git: "#",
    },
    {
      icon: "03",
      title: "Fitnizy",
      desc: "An online fitness and wellness platform tailored for women, featuring live workouts and diet plans.",
      tags: ["Next.js", "React"],
      live: "https://www.fitnizy.com/",
      git: "#",
    },

  ];

  return (
    <section id="projects" className="relative py-28 bg-brand-bg">
      <div className="container mx-auto w-[min(1120px,92vw)]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-brand-teal inline-flex items-center gap-2.5 before:content-[''] before:w-[26px] before:h-[1px] before:bg-brand-teal before:opacity-60 mb-6"
        >
          Selected Works
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-semibold mb-16"
        >
          Featured <span className="gradient-text">Projects</span>.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative glass-panel rounded-2xl p-8 flex flex-col h-full overflow-hidden group transition-transform duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-glow-indigo rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="text-3xl font-mono font-bold text-white/5">{p.icon}</div>
                <div className="flex gap-4 text-sm font-medium">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-teal transition-colors">
                    Live ↗
                  </a>
                  <a href={p.git} target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-teal transition-colors">
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-brand-teal transition-colors">{p.title}</h3>
                <p className="text-brand-text-dim leading-relaxed mb-8">{p.desc}</p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {p.tags.map((tag, j) => (
                  <span key={j} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-brand-text-faint group-hover:border-white/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
