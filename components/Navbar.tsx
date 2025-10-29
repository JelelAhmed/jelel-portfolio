"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={clsx(
        "fixed left-1/2 -translate-x-1/2 z-[60] flex items-center justify-center gap-5 rounded-full border backdrop-blur-lg transition-all duration-500 ease-out",
        "bg-[rgba(10,10,15,0.7)] border-[rgba(255,255,255,0.06)] shadow-[0_8px_24px_rgba(0,0,0,0.3)]",
        "px-8 py-3",
        "max-md:gap-3 max-md:px-5 max-md:py-2 max-md:text-[0.85rem]",
        "top-6 max-sm:top-[2.5rem]",
        scrolled &&
          "top-3 max-sm:top-[1.5rem] scale-[0.97] bg-[rgba(15,15,20,0.8)] border-[rgba(255,255,255,0.05)] shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
      )}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "relative text-white/70 hover:text-white font-medium tracking-wide transition-all duration-200 px-3 py-1",
            pathname === link.href &&
              "text-[#9b8aff] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-[#9b8aff] after:to-transparent after:rounded"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
