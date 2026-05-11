import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Bookmark, Check } from "lucide-react";

const topics = [
    { t: "Deep Learning", p: 60 },
  { t: "System Design", p: 65 },
  { t: "Cloud Fundamentals", p: 57 },
    { t: "Docker & Containers", p: 73 },
  { t: "AI Product Development", p: 50 },
  { t: "Full-Stack Systems", p: 72 },
    { t: "Prompt Engineering", p: 87 },
  { t: "Interview Preparation", p: 65 },
];

export function Learning() {
  return (
    <section id="learning" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Currently Annotating"
          title="What I'm reading & writing about"
          note="An active board: pinned pages, open tabs, and topics I'm actively making notes on."
        />

        <div className="paper-card p-6 sm:p-10 grid-paper">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.t}
                initial={{ opacity: 0, y: 16, rotate: i % 2 ? 1.5 : -1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -3, rotate: 0 }}
                className="bg-card border border-border rounded-lg p-5 shadow-[var(--shadow-paper)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-clay fill-clay/30" />
                    <span className="font-serif text-lg font-semibold">{topic.t}</span>
                  </div>
                  <Check className="w-4 h-4 text-sage" />
                </div>
                <div className="mt-4 h-1.5 rounded-full bg-paper-deep overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${topic.p}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-clay"
                  />
                </div>
                <div className="mt-2 text-xs font-hand text-ink-soft">~ {topic.p}% in</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Between the lines */}
        <div id="between" className="mt-24">
          <SectionHeading
            eyebrow="Between the Lines"
            title="A bit of personal margin"
          />
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="paper-card p-8 sm:p-12 max-w-3xl"
          >
            <p className="font-serif text-xl sm:text-2xl leading-relaxed italic text-ink">
              "Beyond code, I enjoy designing clean interfaces, exploring AI ideas,
              understanding how systems work, and building products that feel useful and
              polished. I'm especially interested in projects where software meets real
              human problems."
            </p>
            <footer className="mt-6 font-hand text-clay text-2xl">— Rujula</footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
