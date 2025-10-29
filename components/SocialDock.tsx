"use client";

const SOCIALS = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/abduljelelahmed",
    icon: "linkedin",
  },
  { name: "GitHub", link: "https://github.com/JelelAhmed", icon: "github" },
  { name: "Email", link: "mailto:abduljelelahmed@gmail.com", icon: "mail" },
];

export default function SocialDock() {
  return (
    <div
      className="
        fixed left-1/2 -translate-x-1/2 bottom-5
        flex items-center justify-center gap-3
        px-4 py-2 rounded-full
        bg-[rgba(255,255,255,0.04)]
        border border-[rgba(255,255,255,0.06)]
        backdrop-blur-xl
        shadow-[0_8px_30px_rgba(0,0,0,0.5)]
        z-50
        transition-all duration-300
        max-sm:gap-2 max-sm:px-3 max-sm:py-1.5
      "
    >
      {SOCIALS.map((s) => (
        <a
          key={s.name}
          href={s.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group relative
            w-10 h-10 grid place-items-center
            rounded-lg border border-[rgba(255,255,255,0.07)]
            bg-[rgba(255,255,255,0.02)]
            transition-all duration-300
            hover:-translate-y-[2px] hover:scale-105
            hover:border-[rgba(199,184,255,0.6)]
            hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]
            max-sm:w-9 max-sm:h-9
          "
        >
          {/* Tooltip */}
          <span
            className="
              absolute -top-6 left-1/2 -translate-x-1/2
              bg-gradient-to-r from-[var(--accent1)] to-[var(--accent2)]
              text-white px-2 py-[2px] rounded text-[10px]
              opacity-0 group-hover:opacity-100 transition
              max-sm:hidden
            "
          >
            {s.name}
          </span>

          {/* ICONS */}
          {s.icon === "linkedin" && (
            <svg
              className="w-4 h-4 text-white group-hover:animate-pulse"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="grad-linkedin" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#c7b8ff" />
                </linearGradient>
              </defs>
              <path
                fill="url(#grad-linkedin)"
                d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.46 19H5.5V9h2.96v10zM6.98 7.69c-.95 0-1.71-.77-1.71-1.72 0-.94.76-1.7 1.71-1.7.95 0 1.71.76 1.71 1.7 0 .95-.76 1.72-1.71 1.72zM19 19h-2.96v-5.61c0-1.34-.48-2.26-1.69-2.26-.92 0-1.46.62-1.7 1.22-.09.23-.11.55-.11.88V19H9.57s.04-9 0-10h2.96v1.42c.39-.6 1.09-1.46 2.66-1.46 1.94 0 3.4 1.26 3.4 3.96V19z"
              />
            </svg>
          )}

          {s.icon === "github" && (
            <svg
              className="w-4 h-4 text-white group-hover:animate-pulse"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="grad-github" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#c7b8ff" />
                </linearGradient>
              </defs>
              <path
                fill="url(#grad-github)"
                d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.42 7.86 10.95.57.11.77-.25.77-.55v-2c-3.21.7-3.89-1.55-3.89-1.55-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.04 1.78 2.73 1.27 3.39.97.1-.76.4-1.27.72-1.56-2.56-.29-5.26-1.28-5.26-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.44.11-3 0 0 .97-.31 3.19 1.18.92-.26 1.9-.39 2.87-.4.97.01 1.96.14 2.88.4 2.22-1.49 3.18-1.18 3.18-1.18.62 1.56.23 2.71.12 3 .73.8 1.18 1.82 1.18 3.07 0 4.41-2.7 5.38-5.28 5.66.41.35.77 1.04.77 2.1v3.12c0 .3.2.67.78.55C20.21 21.42 23.5 17.09 23.5 12 23.5 5.73 18.27.5 12 .5z"
              />
            </svg>
          )}

          {s.icon === "mail" && (
            <svg
              className="w-4 h-4 text-white group-hover:animate-pulse"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="grad-mail" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#c7b8ff" />
                </linearGradient>
              </defs>
              <path
                stroke="url(#grad-mail)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                fill="none"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
              />
            </svg>
          )}
        </a>
      ))}
    </div>
  );
}
