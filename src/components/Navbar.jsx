import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(1.2rem,4vw,3rem)] py-[1.1rem] transition-all duration-400 ease-in-out border-b border-transparent ${
        scrolled
          ? "bg-brand-panel/75 backdrop-blur-md border-white/10 py-[0.8rem]"
          : ""
      }`}
    >
      <a href="#hero" className="font-heading font-semibold text-lg tracking-tight">
        Mohd <span className="font-light text-brand-text-dim">Faisal</span>
      </a>
      
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#about" className="hover:text-brand-teal transition-colors">About</a>
        <a href="#skills" className="hover:text-brand-teal transition-colors">Skills</a>
        <a href="#experience" className="hover:text-brand-teal transition-colors">Experience</a>
        <a href="#projects" className="hover:text-brand-teal transition-colors">Work</a>
        <a 
          href="#contact" 
          className="ml-2 px-5 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
