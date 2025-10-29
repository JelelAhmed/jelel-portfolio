import ProjectCard from "@/components/ProjectCard";

const PROJECTS = [
  {
    name: "Monodome Dashboard",
    desc: "Role-based logistics admin with maps + Paystack.",
    tech: "React · Google Maps · Paystack",
  },
  {
    name: "Yata Platform",
    desc: "Data vending system for MTN, Glo, Airtel users.",
    tech: "Next.js · Tailwind · Supabase",
  },
  {
    name: "SellDay Concept",
    desc: "Shopping interface with instant wallet checkout.",
    tech: "Vue · Firebase",
  },
];

export default function ProjectGrid() {
  return (
    <section
      id="projects"
      className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 w-full max-w-3xl mt-16"
    >
      {PROJECTS.map((p) => (
        <ProjectCard key={p.name} {...p} />
      ))}
    </section>
  );
}
