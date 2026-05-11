import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const labels = [
  {
    text: "AI experiments",
    className: "sticky-note-sage",
    x: "8%",
    y: "12%",
    rot: -6,
  },
  {
    text: "full-stack builds",
    className: "",
    x: "82%",
    y: "18%",
    rot: 5,
  },
  {
    text: "system design",
    className: "sticky-note-clay",
    x: "10%",
    y: "78%",
    rot: 4,
  },
  {
    text: "ML models",
    className: "sticky-note-sage",
    x: "84%",
    y: "72%",
    rot: -4,
  },
  {
    text: "clean UI",
    className: "",
    x: "78%",
    y: "46%",
    rot: 8,
  },
  {
    text: "voice AI",
    className: "sticky-note-clay",
    x: "16%",
    y: "42%",
    rot: -3,
  },


  {
    text: "REST APIs",
    className: "sticky-note-clay",
    x: "58%",
    y: "58%",
    rot: 3,
  },
];

export function Hero() {
  return (
    <section id="notebook" className="relative pt-16 pb-28 sm:pt-24 sm:pb-36 overflow-hidden">
      {/* Floating sticky labels */}
      {labels.map((l, i) => (
        <motion.div
          key={l.text}
          initial={{ opacity: 0, y: 20, rotate: l.rot - 8 }}
          animate={{ opacity: 1, y: 0, rotate: l.rot }}
          transition={{ delay: 0.4 + i * 0.12, duration: 0.7, type: "spring" }}
          className="absolute hidden md:block z-0"
          style={{ left: l.x, top: l.y }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            className={`sticky-note ${l.className} px-4 py-2 font-hand text-lg text-ink`}
          >
            {l.text}
          </motion.div>
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="paper-card px-6 sm:px-12 py-12 sm:py-16 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-clay" />
            <span className="font-hand text-clay text-xl">field notebook · vol. 01</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl font-semibold leading-[1.05] tracking-tight">
            Hi, I'm{" "}
            <span className="ink-underline">Rujula Raut</span>.
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-ink-soft font-serif italic">
            I build thoughtful software with full-stack engineering, AI/ML, and clean design.
          </p>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink/85 max-w-2xl">
            I'm a B.Tech Computer Science student who treats every project like a field note: an idea tested, improved, and shaped into something useful through code, design, and curiosity.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 rounded-full text-sm font-medium hover:bg-ink/90 transition-all hover:gap-3"
            >
              View my work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-ink/30 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-paper-deep transition"
            >
              <Mail className="w-4 h-4" /> Contact me
            </a>
            <a
              href="https://github.com/rujularaut"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm hover:text-clay transition"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rujula-raut"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm hover:text-clay transition"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>

          {/* Hand drawn arrow */}
          <svg
            className="absolute -bottom-10 right-6 hidden sm:block"
            width="90"
            height="80"
            viewBox="0 0 90 80"
            fill="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.2, duration: 1.2 }}
              d="M5 10 C 30 30, 50 25, 70 55"
              stroke="oklch(0.45 0.03 50)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              d="M62 50 L72 56 L66 65"
              stroke="oklch(0.45 0.03 50)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        <p className="text-center font-hand text-ink-soft text-xl mt-14 sm:mt-20">
          ↓ turn the page
        </p>
      </div>
    </section>
  );
}
