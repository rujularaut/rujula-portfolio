import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  Code2,
  Layout,
  Server,
  Brain,
  Database,
  Wrench,
  Cloud,
  BookOpen,
} from "lucide-react";

const groups = [
  {
    title: "Languages",
    icon: Code2,
    note: "what I write in daily",
    tags: ["Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: Layout,
    note: "interfaces that feel right",
    tags: ["React", "HTML", "CSS", "Tailwind CSS", "UI/UX Design"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    note: "the wiring underneath",
    tags: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    note: "intelligent systems",
    tags: ["Machine Learning", "Deep Learning", "CNN", "RNN", "LLMs", "NLP", "Computer Vision", "Prompt Engineering"],
  },
  
{
  title: "Databases",
  icon: Database,
  note: "working with SQL and NoSQL data",
  tags: ["MongoDB", "MySQL", "PostgreSQL"],
},
  {
    title: "Tools & Platforms",
    icon: Wrench,
    note: "ship & maintain",
    tags: ["Git", "GitHub", "Docker", "Containers", "Postman", "Render", "Railway", "GitHub Actions"],
  },
  {
    title: "Cloud Concepts",
    icon: Cloud,
    note: "currently learning",
    tags: ["AWS Basics", "GCP Theory", "Azure Theory"],
  },
  {
  title: "CS Foundations",
  icon: BookOpen,
  note: "concepts I keep strengthening",
  tags: ["DBMS", "System Design", "REST APIs", "OOP"],
},

];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-paper-deep/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Toolbox margins"
          title="What's in the kit"
note="A labelled corner of my notebook for the tools, systems, and ideas I’m growing with."        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="paper-card p-6 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-lg bg-paper-deep flex items-center justify-center text-ink">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-hand text-clay text-base leading-tight text-right max-w-[55%]">
                    {g.note}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{g.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {g.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-paper border border-border text-ink/80 hover:border-clay/50 hover:text-ink transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
