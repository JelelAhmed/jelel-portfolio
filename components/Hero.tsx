import EmailChip from "@/components/EmailChip";
import ProjectGrid from "@/components/ProjectGrid";

export default function Hero() {
  return (
    <>
      <h1
        className="
          font-serif italic
          text-[clamp(2.6rem,5vw,4rem)]
          bg-gradient-to-b from-white to-[#c7b8ff]
          text-transparent bg-clip-text
          leading-tight
          transition-transform duration-500 ease-out
          hover:scale-[1.02] hover:drop-shadow-[0_0_30px_rgba(139,92,246,0.25)]
        "
      >
        Jelel’s Board
      </h1>

      <div className="uppercase text-[0.8rem] tracking-[0.2em] text-[rgba(255,255,255,0.55)] mt-2">
        Frontend Engineer & Product Designer
      </div>

      <p className="max-w-xl mt-5 text-gray-400 leading-relaxed">
        Focused on elegant UI, performance, and seamless user experience. I
        build digital tools and dashboards powered by React, Next.js, and
        Tailwind.
      </p>

      <div className="mt-8">
        <EmailChip />
      </div>

      <ProjectGrid />
    </>
  );
}
