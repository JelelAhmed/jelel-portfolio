"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function RightHint() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    const onScroll = () => setScrolled(window.scrollY > 50);
    onResize();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed flex items-center gap-2 text-[11px] text-white/60 z-50 transition-all duration-500",
        isMobile
          ? "left-1/2 -translate-x-1/2 top-3 pl-[9.5rem]" // aligns beside clock
          : "right-4 top-3",
        scrolled && "opacity-70 translate-y-[-2px]"
      )}
    >
      <span>PRESS</span>
      <kbd className="border border-white/10 px-1.5 py-[1px] rounded text-[11px]">
        B
      </kbd>
      <span>TO BOOK</span>
    </div>
  );
}
