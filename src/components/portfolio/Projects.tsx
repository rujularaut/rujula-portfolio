import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  List,
  X,
} from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  date: string;
  description: string;
  problem: string;
  built: string;
  tech: string[];
  impact: string;
  tags: string[];
  stamp: string;
  accent: "sage" | "clay" | "mustard";
  sideNote: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "KisanAwaaz",
    tagline: "Hindi Voice-Based AI Mandi Price Assistant",
    date: "Entry · 01",
    description:
      "A Hindi voice-based AI assistant that helps farmers ask mandi price questions through speech instead of typing.",
    problem:
      "Many farmers may find it difficult to access mandi price information because of language, literacy, or comfort with digital tools.",
    built:
      "Connected speech recognition, translation, LLM-based reasoning, text-to-speech, and mandi-related information flow into one voice-based experience.",
    tech: ["Python", "Sarvam AI", "ASR", "LLMs", "TTS", "NLP"],
    impact:
      "Made mandi price information feel easier to access by allowing users to ask questions in Hindi through voice.",
    tags: ["AI", "NLP", "Voice AI", "LLM", "Hindi"],
    stamp: "AI · Voice",
    accent: "clay",
    sideNote:
      "The main challenge was not just the AI model. It was making all the moving parts work together smoothly.",
    github: "https://github.com/rujularaut/KisanAwaaz.git",
    demo: "https://www.youtube.com/watch?v=leU39JYUUm8",
  },
  {
    title: "ReLink",
    tagline: "Student Alumni Connection Platform",
    date: "Entry · 02",
    description:
      "A full-stack platform that connects students, alumni, college admins, and super admins through role-based access.",
    problem:
      "College alumni networks often become scattered across spreadsheets, social platforms, and informal chats.",
    built:
      "Built authentication, dynamic profile setup, mentorship requests, alumni interactions, protected routes, and admin workflows using role-based access control.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT"],
    impact:
      "Created a structured platform for student-alumni engagement, mentorship, and college-level alumni management.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "RBAC"],
    stamp: "Full-Stack",
    accent: "sage",
    sideNote:
      "This project helped me think more clearly about roles, permissions, data flow, and real product structure.",
    github: "https://github.com/rujularaut/Relink-Prototype.git",
    demo: "",
  },
  {
    title: "MediBook",
    tagline: "Full-Stack Hospital Appointment Booking Platform",
    date: "Entry · 03",
    description:
      "A deployed full-stack appointment booking platform built for patients, doctors, and admins.",
    problem:
      "Hospital appointment booking can become confusing when availability, bookings, and user roles are managed manually.",
    built:
      "I worked on a role-based system with authentication, patient and doctor workflows, appointment booking, doctor availability, REST APIs, database-backed storage, and deployment on Render.",
    tech: ["React", "Node.js", "Express", "MySQL", "Prisma", "REST APIs", "Render"],
    impact:
      "Turned a healthcare workflow into a usable deployed product with multiple roles, database integration, and end-to-end appointment management.",
    tags: ["Full Stack", "REST API", "Authentication", "MySQL", "Prisma", "Render"],
    stamp: "Deployed · Full-Stack",
    accent: "mustard",
    sideNote:
      "This project is important because it shows more than UI. It includes auth, roles, APIs, database design, and deployment.",
    github: "https://github.com/rujularaut/MediBook_main.git",
    demo: "https://medibook-3rrq.onrender.com",
  },
  {
    title: "CogniCare",
    tagline: "Cognitive Support Tool for Anxiety Management",
    date: "Entry · 04",
    description:
      "A web-based cognitive support tool with brain-training games, calming meditation, progress tracking, and a soothing interface.",
    problem:
      "Many mental health support tools can feel either too clinical or too generic, which makes the user experience less comforting.",
    built:
      "I contributed to the frontend experience with calming screens, simple cognitive activities, meditation sections, and progress-focused user flows.",
    tech: ["React", "UI/UX", "Frontend"],
    impact:
      "Built during the IEEE EMBS Pune Chapter internship with a focus on comfort, clarity, and small positive user actions.",
    tags: ["React", "Mental Health", "UI/UX"],
    stamp: "Health · UX",
    accent: "sage",
    sideNote:
      "This project taught me that soft design choices can make a product feel safer and easier to use.",
    github: "https://github.com/rujularaut/CogniCare.git",
    demo: "",
  },
  {
    title: "Cloudburst Prediction",
    tagline: "Real-Time Cloudburst Risk Estimation",
    date: "Entry · 05",
    description:
      "A weather prediction system that uses real-time Open-Meteo data and machine learning models to estimate cloudburst risk.",
    problem:
      "Cloudburst risk is difficult to understand from raw weather values alone, especially when users need a simple risk estimate.",
    built:
      "I used Open-Meteo weather data, feature processing, Random Forest, Multiple Linear Regression, and visualizations to create a risk prediction workflow.",
    tech: ["Python", "scikit-learn", "Open-Meteo", "Pandas", "Matplotlib"],
    impact:
      "Created a working pipeline that turns weather API data into model predictions and readable risk insights.",
    tags: ["Python", "ML", "Weather API", "Random Forest"],
    stamp: "ML · Data",
    accent: "clay",
    sideNote:
      "This project made me understand how much data preparation affects the final prediction quality.",
    github: "",
    demo: "",
  },
  {
    title: "API Test Automation",
    tagline: "Python Framework for API Testing",
    date: "Entry · 06",
    description:
      "A Python-based API testing framework built with pytest, requests, SQLite logging, HTML reports, and CI support.",
    problem:
      "Manual API testing is hard to repeat consistently, and it becomes difficult to track what passed, failed, or changed over time.",
    built:
      "I built a pytest-based framework with positive and negative API tests, request handling, SQLite-backed logs, HTML reports, and GitHub Actions integration.",
    tech: ["Python", "pytest", "requests", "SQLite", "GitHub Actions"],
    impact:
      "Created a repeatable testing setup that can record test runs, generate reports, and fit into a CI workflow.",
    tags: ["Python", "Pytest", "API Testing", "CI"],
    stamp: "QA · CI",
    accent: "mustard",
    sideNote:
      "This helped me see testing as part of engineering quality, not just a final checklist.",
    github: "https://github.com/rujularaut/API_Test_Framework.git",
    demo: "",
  },
];

const accentBorder = {
  sage: "border-l-sage",
  clay: "border-l-clay",
  mustard: "border-l-mustard",
} as const;

const accentText = {
  sage: "text-sage",
  clay: "text-clay",
  mustard: "text-mustard",
} as const;

export function Projects() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [tocOpen, setTocOpen] = useState(false);

  const total = projects.length;

  const goto = (nextPage: number) => {
    if (nextPage < 0 || nextPage >= total || nextPage === page) return;
    setDir(nextPage > page ? 1 : -1);
    setPage(nextPage);
  };

  const next = () => goto(page + 1);
  const prev = () => goto(page - 1);

  const current = projects[page];

  const variants = useMemo(
    () => ({
      enter: (d: 1 | -1) => ({
        rotateY: d === 1 ? 90 : -90,
        opacity: 0,
        transformPerspective: 1600,
        transformOrigin: d === 1 ? "left center" : "right center",
      }),
      center: {
        rotateY: 0,
        opacity: 1,
        transformPerspective: 1600,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
      },
      exit: (d: 1 | -1) => ({
        rotateY: d === 1 ? -90 : 90,
        opacity: 0,
        transformPerspective: 1600,
        transformOrigin: d === 1 ? "right center" : "left center",
        transition: { duration: 0.55, ease: [0.65, 0, 0.35, 1] as const },
      }),
    }),
    [],
  );

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Build Logs"
          title="The project journal"
          note="A build diary of projects, experiments, and lessons collected page by page."
        />

        {!open ? (
          <DiaryCover onOpen={() => setOpen(true)} />
        ) : (
          <div className="relative">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <button
                onClick={() => setTocOpen(true)}
                className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-clay transition"
              >
                <List className="w-4 h-4" /> Table of contents
              </button>

              <div className="font-hand text-ink-soft text-lg">
                page {page + 1} <span className="opacity-50">/ {total}</span>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-clay transition"
              >
                <X className="w-4 h-4" /> Close diary
              </button>
            </div>

            <div className="relative mx-auto" style={{ perspective: "2000px" }}>
              <div className="relative paper-card overflow-hidden shadow-[0_30px_60px_-25px_oklch(0.3_0.04_50/0.4)]">
                <div
                  aria-hidden
                  className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 z-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.4 0.04 50 / 0.18) 35%, oklch(0.4 0.04 50 / 0.28) 50%, oklch(0.4 0.04 50 / 0.18) 65%, transparent)",
                  }}
                />

                <div className="relative min-h-[640px] sm:min-h-[700px]">
                  <AnimatePresence custom={dir} mode="wait" initial={false}>
                    <motion.div
                      key={page}
                      custom={dir}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute inset-0"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Spread project={current} index={page} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div
                  aria-hidden
                  className="absolute inset-y-0 right-0 w-6 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(270deg, oklch(0.4 0.04 50 / 0.18), transparent)",
                  }}
                />

                <div
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-6 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.4 0.04 50 / 0.18), transparent)",
                  }}
                />
              </div>

              <button
                onClick={prev}
                disabled={page === 0}
                aria-label="Previous page"
                className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-paper-deep transition disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={next}
                disabled={page === total - 1}
                aria-label="Next page"
                className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-paper-deep transition disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-1.5">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goto(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === page
                      ? "w-8 bg-ink"
                      : "w-3 bg-ink/20 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>

            <AnimatePresence>
              {tocOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4"
                  onClick={() => setTocOpen(false)}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="paper-card w-full max-w-md p-7"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-serif text-2xl">Table of contents</h4>

                      <button
                        onClick={() => setTocOpen(false)}
                        className="text-ink-soft hover:text-clay"
                        aria-label="Close"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <ol className="space-y-2.5">
                      {projects.map((p, i) => (
                        <li key={p.title}>
                          <button
                            onClick={() => {
                              goto(i);
                              setTocOpen(false);
                            }}
                            className={`w-full text-left flex items-baseline gap-3 group ${
                              i === page ? "text-ink" : "text-ink-soft"
                            }`}
                          >
                            <span className="font-hand text-lg w-6">{i + 1}.</span>

                            <span className="font-serif text-lg group-hover:text-clay transition flex-1">
                              {p.title}
                            </span>

                            <span className="flex-1 border-b border-dotted border-rule mb-1" />

                            <span className={`text-xs ${accentText[p.accent]}`}>
                              {p.stamp}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ol>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

function DiaryCover({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <motion.button
        onClick={onOpen}
        whileHover={{ rotateZ: -1, y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="group relative block w-full max-w-md aspect-[3/4] rounded-r-md rounded-l-sm overflow-hidden text-left"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.42 0.045 35) 0%, oklch(0.32 0.04 30) 100%)",
          boxShadow:
            "0 30px 60px -25px oklch(0.2 0.04 30 / 0.6), inset 0 0 80px oklch(0.2 0.04 30 / 0.4)",
        }}
        aria-label="Open project diary"
      >
        <div
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-5"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.22 0.03 30), oklch(0.32 0.04 30) 60%, transparent)",
            boxShadow: "inset -3px 0 6px oklch(0.15 0.03 30 / 0.6)",
          }}
        />

        <div
          aria-hidden
          className="absolute inset-3 rounded-sm border border-dashed"
          style={{ borderColor: "oklch(0.78 0.05 80 / 0.3)" }}
        />

        <div
          aria-hidden
          className="absolute top-0 right-10 w-3 h-32"
          style={{
            background: "linear-gradient(180deg, var(--clay), oklch(0.55 0.1 35))",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)",
          }}
        />

        <div className="relative h-full flex flex-col items-center justify-center px-8 text-center">
          <div
            className="font-hand text-2xl mb-2"
            style={{ color: "oklch(0.85 0.06 80)" }}
          >
            2024 to today
          </div>

          <h3
            className="font-serif text-4xl sm:text-5xl font-semibold leading-tight"
            style={{ color: "oklch(0.92 0.04 85)" }}
          >
            Project
            <br />
            Journal
          </h3>

          <div
            className="mt-6 w-16 h-px"
            style={{ background: "oklch(0.78 0.05 80 / 0.5)" }}
          />

          <p
            className="font-hand text-xl mt-4"
            style={{ color: "oklch(0.82 0.05 80)" }}
          >
            Rujula Raut
          </p>

          <div
            className="absolute bottom-7 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all group-hover:gap-3"
            style={{
              borderColor: "oklch(0.78 0.05 80 / 0.5)",
              color: "oklch(0.92 0.04 85)",
              background: "oklch(0.25 0.03 30 / 0.4)",
            }}
          >
            <BookOpen className="w-4 h-4" />
            Open diary
          </div>
        </div>
      </motion.button>

      <p className="font-hand text-ink-soft text-lg mt-6">
        Click the cover to read the entries
      </p>
    </motion.div>
  );
}

function Spread({ project: p, index }: { project: Project; index: number }) {
  const hasLinks = Boolean(p.github || p.demo);

  return (
    <div className="grid md:grid-cols-2 h-full min-h-[640px] sm:min-h-[700px]">
      <div className="relative p-8 sm:p-12 md:border-r border-rule/40 overflow-hidden">
        <div className="absolute inset-0 grid-paper opacity-40 pointer-events-none" />

        <div className="absolute top-6 left-8 right-8 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-ink-soft">
          <span>{p.date}</span>

          <span className={`font-hand text-sm normal-case tracking-normal ${accentText[p.accent]}`}>
            {p.stamp}
          </span>
        </div>

        <div className="relative pt-12">
          <p className="font-hand text-clay text-xl mb-2">{p.tagline}</p>

          <h3
            className={`font-serif text-4xl sm:text-5xl font-semibold leading-[1.05] border-l-4 ${accentBorder[p.accent]} pl-4 -ml-4`}
          >
            {p.title}
          </h3>

          <p className="mt-6 text-ink/85 leading-relaxed text-[1.02rem]">
            {p.description}
          </p>

          <div className="mt-8">
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-soft mb-2">
              The problem
            </div>

            <p className="text-ink/90 leading-relaxed italic">"{p.problem}"</p>
          </div>

          <div className="mt-10 flex items-start gap-3">
            <div className="font-hand text-2xl text-clay leading-none">↳</div>

            <p className="font-hand text-ink-soft text-lg leading-snug">
              {p.sideNote}
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between text-xs text-ink-soft">
          <span className="font-hand">Page {index * 2 + 1}</span>
          <span className="opacity-60">left page</span>
        </div>
      </div>

      <div className="relative p-8 sm:p-12 overflow-hidden bg-paper-deep/30">
        <div className="absolute inset-0 grid-paper opacity-30 pointer-events-none" />

        <div className="absolute top-6 left-8 right-8 flex items-center justify-end text-[11px] uppercase tracking-[0.2em] text-ink-soft">
          <span>build notes</span>
        </div>

        <div className="relative pt-12 space-y-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-soft mb-2">
              What I built
            </div>

            <p className="text-ink/90 leading-relaxed">{p.built}</p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-soft mb-2">
              Tech stack
            </div>

            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[12px] px-2.5 py-1 rounded bg-card border border-border text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-soft mb-2">
              Impact
            </div>

            <p className={`leading-relaxed font-serif text-lg ${accentText[p.accent]}`}>
              {p.impact}
            </p>
          </div>

          <div className="pt-2">
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-soft mb-2">
              Tagged
            </div>

            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded bg-paper text-ink-soft border border-border/60"
                >
                  #{t.toLowerCase().replace(/\s+/g, "-")}
                </span>
              ))}
            </div>
          </div>

          {hasLinks && (
            <div className="pt-4 flex items-center gap-3 border-t border-dashed border-border">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded border border-border hover:bg-card hover:text-clay transition mt-4"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              )}

              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded border border-border hover:bg-card hover:text-clay transition mt-4"
                >
                  <ExternalLink className="w-4 h-4" /> Live demo
                </a>
              )}
            </div>
          )}
        </div>

        <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between text-xs text-ink-soft">
          <span className="opacity-60">right page</span>
          <span className="font-hand">Page {index * 2 + 2}</span>
        </div>
      </div>
    </div>
  );
}