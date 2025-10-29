interface Props {
  name: string;
  desc: string;
  tech: string;
}

export default function ProjectCard({ name, desc, tech }: Props) {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(139,92,246,0.25)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
      <div className="font-semibold text-base mb-1">{name}</div>
      <div className="text-[0.85rem] text-white/80">{desc}</div>
      <div className="text-[0.75rem] text-[var(--muted)] mt-2">{tech}</div>
    </div>
  );
}
