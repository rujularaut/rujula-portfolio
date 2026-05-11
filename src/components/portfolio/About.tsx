import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const marginNotes = [
  "♥ clean UI + practical AI",
  "frontend ↔ full-stack",
  "learning: system design,\nprompt engineering,\ndeep learning, cloud",
  "builds for real human\nproblems, not demos",
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Field Note 01" title="About me" />

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="paper-card p-8 sm:p-12"
          >
            <p className="font-serif text-2xl sm:text-3xl leading-snug text-ink mb-6">
              I'm a Computer Science Engineering student at{" "}
              <span className="ink-underline">MIT ADT University, Pune</span>, passionate
              about building useful software.
            </p>
            <p className="text-ink/85 text-lg leading-relaxed mb-4">
              My notebook is filled with frontend experiments, backend systems, AI/ML ideas, and product notes. I enjoy creating clean interfaces, experimenting with intelligent systems, and learning how real-world software is designed, deployed, and scaled.
            </p>
            <p className="text-ink/85 text-lg leading-relaxed">
             I care about building products that feel useful, polished, and intentional, not just technically complete.
            </p>
          </motion.div>

          <div className="space-y-5 lg:pt-8">
            {marginNotes.map((note, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20, rotate: i % 2 ? 2 : -2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`font-hand text-xl text-ink p-4 sticky-note ${
                  i % 2 === 0 ? "sticky-note-sage" : i === 1 ? "sticky-note-clay" : ""
                }`}
                style={{ whiteSpace: "pre-line" }}
              >
                {note}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
