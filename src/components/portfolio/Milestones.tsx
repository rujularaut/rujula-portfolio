import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, Users, Briefcase, Code, Calendar, Hand } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    date: "Ongoing",
    title: "B.Tech Computer Science Engineering",
    org: "MIT ADT University, Pune",
    note: "Focus: Full-stack, AI/ML, system design.",
  },
  {
    icon: Users,
    date: "Former",
    title: "Vice President: IEEE WIE Affinity Group",
    org: "IEEE MIT-ADT Student Branch",
    note: "Worked on student-led initiatives, and activities focused on encouraging more women in engineering and technology.",
  },
  {
    icon: Briefcase,
    date: "Internship",
    title: "IEEE EMBS Pune Chapter Internship",
    org: "CogniCare: Cognitive Support Tool",
    note: "Contributed to a web-based mental health support tool with calming UI, brain-training activities, and progress-focused user flows.",
  },
  {
    icon: Code,
    date: "Internship",
    title: "Frontend Web Developer",
    org: "Codtech IT Solutions",
    note: "Built responsive frontend interfaces while improving my understanding of reusable components, layout structure, and clean UI implementation.",
  },
  {
    icon: Calendar,
    date: "Organizer",
    title: "TechSangam: National-level Hackathon",
    org: "IEEE MIT-ADT Student Branch",
    note: "An event chapter where I helped coordinate a national-level hackathon and learned how collaboration, planning, and execution shape student tech events.",
  },
  {
    icon: Hand,
    date: "Volunteer",
    title: "SIH 2024 Hardware Edition",
    org: "Smart India Hackathon",
    note: "Supported on-ground coordination during the hardware edition, assisting with team management, event logistics, and smooth execution.",
  },
];

export function Milestones() {
  return (
    <section id="milestones" className="py-24 sm:py-32 bg-paper-deep/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Milestone Pages"
          title="A timeline, in entries"
          note="A few marked pages from my journey so far: roles, internships, events, and experiences that shaped how I build."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* center spine */}
          <div className="absolute left-5 sm:left-1/2 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {items.map((it, i) => {
              const Icon = it.icon;
              const left = i % 2 === 0;

              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10"
                >
                  {/* dot */}
                  <span className="absolute left-3.5 sm:left-1/2 top-5 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-clay ring-4 ring-paper-deep/40 z-10" />

                  <div
                    className={`paper-card p-5 ${
                      left
                        ? "sm:col-start-1 sm:text-right"
                        : "sm:col-start-2 sm:text-left"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 text-clay font-hand text-lg ${
                        left ? "sm:justify-end" : "sm:justify-start"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{it.date}</span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold mt-1">
                      {it.title}
                    </h3>

                    <div className="text-ink-soft text-sm">{it.org}</div>

                    <p className="mt-2 text-ink/85 text-sm leading-relaxed">
                      {it.note}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}