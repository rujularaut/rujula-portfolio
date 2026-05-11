import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "notebook", label: "Notebook" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "milestones", label: "Milestones" },
  { id: "learning", label: "Learning" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("notebook");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 backdrop-blur-md bg-paper/70 border-b border-border/60"
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#notebook" className="flex items-center gap-2 group">
          <span className="font-serif text-lg font-semibold tracking-tight">Rujula</span>
          <span className="font-hand text-clay text-xl leading-none -mt-1">.notes</span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="relative px-3 py-2 text-sm text-ink-soft hover:text-ink transition-colors"
                >
                  {s.label}
                  {isActive && (
                    <motion.span
                      layoutId="tab-indicator"
                      className="absolute left-2 right-2 -bottom-0.5 h-[3px] bg-clay rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-full bg-ink text-paper hover:bg-ink/90 transition-colors"
        >
          Say hello
        </a>
      </nav>
    </motion.header>
  );
}
