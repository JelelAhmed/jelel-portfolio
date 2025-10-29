"use client";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, "0");
      const m = String(d.getMinutes()).padStart(2, "0");
      const s = String(d.getSeconds()).padStart(2, "0");
      const am = d.getHours() >= 12 ? "PM" : "AM";
      setTime(`${h}:${m}:${s} ${am}`);
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-4 sm:px-6 py-2.5
        text-[11px] text-white/70 tracking-wider

        /* Subtle glass look that hides text behind */
        backdrop-blur-lg bg-[rgba(12,12,13,0.45)]
        /* Absolutely no visible shadow or border */
        shadow-none border-none
      "
    >
      {/* Left clock + city */}
      <div className="flex items-center gap-2">
        <span className="text-white/80">LAGOS.NG</span>
        <span className="text-accent">●</span>
        <span>{time}</span>
      </div>

      {/* Right hint */}
      <div className="flex items-center gap-2">
        <span>PRESS</span>
        <kbd
          className="
            px-1.5 py-[1px] rounded text-[11px] text-white/90
            bg-[rgba(255,255,255,0.08)]
            border-none outline-none shadow-none
          "
        >
          B
        </kbd>
        <span>TO BOOK</span>
      </div>
    </div>
  );
}
