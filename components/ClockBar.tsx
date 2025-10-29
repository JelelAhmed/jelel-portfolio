"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function ClockBar() {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed flex items-center gap-3 text-[11px] text-white/60 tracking-wider z-50 transition-all duration-500",
        "left-4 top-3 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:justify-center",
        scrolled && "opacity-70 translate-y-[-2px]"
      )}
    >
      <span>LAGOS.NG</span>
      <span>●</span>
      <span>{time}</span>
    </div>
  );
}
