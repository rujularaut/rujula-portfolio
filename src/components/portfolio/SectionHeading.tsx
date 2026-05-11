import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-hand text-2xl text-clay">{eyebrow}</span>
        <h2 className="font-serif text-4xl sm:text-5xl font-semibold mt-1 leading-tight">
          {title}
        </h2>
        {note && (
          <p className="mt-3 text-ink-soft text-base sm:text-lg leading-relaxed">{note}</p>
        )}
        <svg className="mt-3" width="160" height="10" viewBox="0 0 160 10" fill="none">
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            d="M2 6 C 30 1, 60 9, 95 4 S 150 8, 158 5"
            stroke="oklch(0.66 0.105 35)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}
