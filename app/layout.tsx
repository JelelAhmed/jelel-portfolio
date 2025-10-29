import "./globals.css";
import { Inter, Lora } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["italic", "normal"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Jelel Ahmed — Portfolio",
  description: "Creative developer portfolio of Jelel Ahmed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body
        suppressHydrationWarning
        className="font-sans bg-charcoal text-white"
      >
        {children}
      </body>
    </html>
  );
}
