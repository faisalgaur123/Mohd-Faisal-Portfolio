import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [state, handleSubmit] = useForm("xovqzqwe"); // Placeholder Formspree ID

  return (
    <section id="contact" className="relative py-28 bg-brand-panel text-center">
      <div className="container mx-auto w-[min(1120px,92vw)] max-w-2xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-brand-teal inline-flex justify-center items-center gap-2.5 before:content-[''] before:w-[26px] before:h-[1px] before:bg-brand-teal before:opacity-60 after:content-[''] after:w-[26px] after:h-[1px] after:bg-brand-teal after:opacity-60 mb-6"
        >
          Contact
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-semibold mb-6"
        >
          Let's build something <span className="gradient-text">great</span>.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-brand-text-dim text-lg mb-12"
        >
          Open to frontend roles and freelance collaborations. Drop a line — I usually reply within a day.
        </motion.p>

        {state.succeeded ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 glass-panel rounded-2xl text-brand-teal font-medium"
          >
            Thanks for reaching out! I'll get back to you shortly.
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onSubmit={handleSubmit} 
            className="flex flex-col gap-4 mb-12 text-left"
          >
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                type="email" 
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-brand-bg-soft border border-white/10 rounded-xl px-5 py-4 text-brand-text placeholder-brand-text-faint focus:outline-none focus:border-brand-teal transition-colors"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1 ml-2" />
            </div>
            
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full bg-brand-bg-soft border border-white/10 rounded-xl px-5 py-4 text-brand-text placeholder-brand-text-faint focus:outline-none focus:border-brand-teal transition-colors resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1 ml-2" />
            </div>
            
            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full px-6 py-4 bg-brand-indigo text-white rounded-xl font-medium hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_var(--color-brand-glow-indigo)]"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="mailto:md.faisal.moosa@gmail.com" className="px-6 py-3 glass-panel rounded-full hover:bg-white/5 transition-colors text-sm font-medium">
            ✉ md.faisal.moosa@gmail.com
          </a>
          <a href="tel:+918750448343" className="px-6 py-3 glass-panel rounded-full hover:bg-white/5 transition-colors text-sm font-medium">
            📞 8750448343
          </a>
          <a href="https://wa.me/918750448343" target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass-panel rounded-full hover:bg-white/5 transition-colors text-sm font-medium text-[#25D366]">
            WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/mohd-faisal-219a0a16b/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass-panel rounded-full hover:bg-white/5 transition-colors text-sm font-medium">
            LinkedIn
          </a>
          <a href="https://github.com/faisalgaur123" target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass-panel rounded-full hover:bg-white/5 transition-colors text-sm font-medium">
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
