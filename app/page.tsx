import GridBackground from "@/components/GridBackground";
import RadialFocus from "@/components/RadialFocus";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialDock from "@/components/SocialDock";
import TopBar from "@/components/TopBar";

export default function HomePage() {
  return (
    <>
      <GridBackground />
      <RadialFocus />
      <TopBar />
      <Navbar />
      <main className="relative z-10 flex flex-col items-center justify-center text-center pt-28 sm:pt-36 pb-36 px-6">
        <Hero />
      </main>
      <SocialDock />
    </>
  );
}
