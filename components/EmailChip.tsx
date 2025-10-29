"use client";

export default function EmailChip() {
  const copyEmail = async () => {
    await navigator.clipboard.writeText("abduljelelahmed@gmail.com");
  };

  return (
    <button
      onClick={copyEmail}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--glass-border)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md transition hover:border-[rgba(139,92,246,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(139,92,246,0.15)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
        />
      </svg>
      <span>abduljelelahmed@gmail.com</span>
    </button>
  );
}
