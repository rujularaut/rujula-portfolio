import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Mail, Linkedin, Github, FileDown } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-paper-deep/40">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Last Page"
          title="Let's build something"
          note="If you're building something meaningful, experimenting with AI, or looking for a developer who cares about both functionality and user experience, I'd love to connect."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="paper-card p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-3 right-8 sticky-note sticky-note-clay px-3 py-1 font-hand text-base">
            ★ open to opportunities
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rujula.raut@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-clay hover:bg-paper-deep transition"
>
  <span className="h-11 w-11 rounded-lg bg-clay/15 text-clay flex items-center justify-center">
    <Mail className="w-5 h-5" />
  </span>
  <div>
    <div className="font-semibold">Email</div>
    <div className="text-sm text-ink-soft">say hi directly</div>
  </div>
</a>
            <a
              href="https://www.linkedin.com/in/rujula-raut"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-clay hover:bg-paper-deep transition"
            >
              <span className="h-11 w-11 rounded-lg bg-sage/20 text-ink flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </span>
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-ink-soft">/in/rujula-raut</div>
              </div>
            </a>
            <a
              href="https://github.com/rujularaut"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-clay hover:bg-paper-deep transition"
            >
              <span className="h-11 w-11 rounded-lg bg-paper-deep text-ink flex items-center justify-center">
                <Github className="w-5 h-5" />
              </span>
              <div>
                <div className="font-semibold">GitHub</div>
                <div className="text-sm text-ink-soft">code & experiments</div>
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-clay hover:bg-paper-deep transition"
            >
              <span className="h-11 w-11 rounded-lg bg-mustard/30 text-ink flex items-center justify-center">
                <FileDown className="w-5 h-5" />
              </span>
              <div>
                <div className="font-semibold">Open to Work</div>
<div className="text-sm text-ink-soft">internships & roles</div>
              </div>
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-dashed border-border flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="font-hand text-clay text-3xl">— with care, Rujula ✦</div>
              <div className="text-xs text-ink-soft mt-1">
                end of notebook · vol. 01 · {new Date().getFullYear()}
              </div>
            </div>
            <a
              href="#notebook"
              className="text-sm font-medium px-4 py-2 rounded-full bg-ink text-paper hover:bg-ink/90 transition"
            >
              ↑ Back to top
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
