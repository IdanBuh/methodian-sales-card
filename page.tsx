/**
 * Milano Bakery — Hero Landing Page
 * Next.js App Router · Tailwind CSS · Lucide React
 *
 * Drop this file into your app/ directory alongside a globals.css that imports Tailwind.
 * Place /public/hero.webp (your bakery photo) in the public/ folder.
 * Install: npm i lucide-react
 */

import type { Metadata } from "next";
import Image from "next/image";
import { Instagram, Facebook, Twitter, ChevronDown, MapPin } from "lucide-react";
import { Bebas_Neue, Dancing_Script, DM_Sans } from "next/font/google";

// ─── Fonts ──────────────────────────────────────────────────────────────────
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
  display: "swap",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
  display: "swap",
});

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Milano Bakery | Kiryat Ono",
  description:
    "Freshly baked croissants, viennoiserie & artisan breads — handcrafted every morning in Kiryat Ono.",
  openGraph: {
    title: "Milano Bakery | Kiryat Ono",
    description:
      "Freshly baked croissants, viennoiserie & artisan breads — handcrafted every morning in Kiryat Ono.",
    locale: "he_IL",
    type: "website",
  },
};

// ─── Constants ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Order", href: "tel:+97237779445" },
  { label: "About", href: "#about" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/milano_bakery_/",
    Icon: Instagram,
  },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "X", href: "#", Icon: Twitter },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function MilanoBakeryPage() {
  return (
    <main
      className={[
        bebas.variable,
        dancing.variable,
        dm.variable,
        "relative h-dvh min-h-[600px] overflow-hidden bg-[#B8884A]",
      ].join(" ")}
    >
      {/* ── Background photo ─────────────────────────────────────────────── */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/hero.webp"
          fill
          alt=""
          className="object-cover object-[center_55%]"
          priority
          sizes="100vw"
        />
        {/* Warm amber grade — heavier at top for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#92400E]/65 via-[#92400E]/30 to-[#92400E]/10" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
      </div>

      {/* ── Skip-nav (accessibility) ─────────────────────────────────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-[#92400E] focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* ── Navigation ───────────────────────────────────────────────────── */}
      <nav
        aria-label="Site navigation"
        className="relative z-20 flex items-center justify-between px-6 sm:px-10 pt-6 sm:pt-8 font-[family-name:var(--font-dm)]"
      >
        {/* Left — page links */}
        <ul className="flex items-center gap-5 sm:gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="
                  text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-white
                  opacity-90 hover:opacity-100 focus-visible:opacity-100
                  transition-opacity duration-150 cursor-pointer
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:rounded-sm
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Centre — brand wordmark */}
        <a
          href="/"
          aria-label="Milano Bakery — home"
          className="
            absolute left-1/2 -translate-x-1/2
            text-base sm:text-lg font-bold tracking-tight text-white
            hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:rounded-sm
            transition-opacity duration-150
          "
        >
          Milano Bakery
        </a>

        {/* Right — location + social */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Location pill */}
          <button
            type="button"
            aria-label="Location: Kiryat Ono"
            aria-haspopup="true"
            className="
              hidden sm:flex items-center gap-1
              text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-white
              opacity-90 hover:opacity-100 focus-visible:opacity-100
              transition-opacity duration-150 cursor-pointer
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:rounded-sm
            "
          >
            <MapPin size={12} strokeWidth={2.5} className="shrink-0" />
            Kiryat Ono
            <ChevronDown size={12} strokeWidth={2.5} className="mt-px" />
          </button>

          {/* Social icons */}
          <div className="flex items-center gap-3 sm:gap-4" aria-label="Social media links">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="
                  text-white opacity-85 hover:opacity-100
                  transition-opacity duration-150
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:rounded-sm
                  p-1 -m-1
                "
              >
                <Icon size={16} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero content ─────────────────────────────────────────────────── */}
      <section
        id="main-content"
        className="relative z-10 flex flex-col items-center text-white text-center px-4"
        style={{ marginTop: "clamp(28px, 4vh, 52px)" }}
        aria-label="Hero"
      >
        {/* Hours tagline */}
        <p
          className="
            font-[family-name:var(--font-dm)]
            text-[9px] sm:text-[10.5px] font-semibold tracking-[0.28em] uppercase
            mb-[3.5vh] opacity-80
          "
        >
          Open Every Day&nbsp;·&nbsp;Sun–Thu 07:00–21:00&nbsp;·&nbsp;Fri 07:00–16:00&nbsp;·&nbsp;Sat 08:00–21:00
        </p>

        {/* ── Display title block ─────────────────────────────────────────── */}
        <div className="relative select-none">
          {/* Flanked mega-heading */}
          <div className="flex items-center gap-3 sm:gap-6 lg:gap-10">
            {/* Left rule */}
            <span
              className="hidden sm:block shrink-0 bg-white/80 rounded-full"
              style={{ width: "clamp(40px, 5vw, 80px)", height: "2.5px" }}
              aria-hidden="true"
            />

            <h1
              className="font-[family-name:var(--font-bebas)] leading-[0.88] tracking-[0.06em] text-white"
              style={{ fontSize: "clamp(68px, 13vw, 178px)" }}
            >
              CROISSANT
            </h1>

            {/* Right rule */}
            <span
              className="hidden sm:block shrink-0 bg-white/80 rounded-full"
              style={{ width: "clamp(40px, 5vw, 80px)", height: "2.5px" }}
              aria-hidden="true"
            />
          </div>

          {/* "Freshly Baked" — overlapping script, offset bottom-right */}
          <div
            aria-hidden="true"
            className="absolute pointer-events-none select-none"
            style={{
              bottom: "-0.2em",
              right: "3%",
              transform: "rotate(-5deg)",
              zIndex: 2,
            }}
          >
            <span
              className="font-[family-name:var(--font-dancing)] leading-none text-[#5B1208]"
              style={{
                fontSize: "clamp(34px, 5.2vw, 74px)",
                filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.14))",
              }}
            >
              Freshly Baked
            </span>
          </div>
        </div>

        {/* Spacer that accounts for the overlapping script */}
        <div style={{ height: "clamp(24px, 3.5vw, 52px)" }} />

        {/* ── CTA buttons ────────────────────────────────────────────────── */}
        <div
          className="flex items-center gap-3 sm:gap-5 font-[family-name:var(--font-dm)]"
          role="group"
          aria-label="Call to action"
        >
          {/* Primary — solid white */}
          <a
            href="tel:+97237779445"
            className="
              inline-flex items-center justify-center
              min-h-[44px] px-7 sm:px-10 py-3 sm:py-3.5
              bg-white text-[#3D1208]
              text-[12px] sm:text-[13px] font-semibold tracking-wide
              rounded-full
              shadow-[0_4px_28px_rgba(0,0,0,0.22)]
              hover:bg-white/93 active:scale-[0.97]
              transition-all duration-150 cursor-pointer
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
            "
          >
            Order Now
          </a>

          {/* Secondary — ghost */}
          <a
            href="#menu"
            className="
              inline-flex items-center justify-center
              min-h-[44px] px-7 sm:px-10 py-3 sm:py-3.5
              border-2 border-white/80 text-white
              text-[12px] sm:text-[13px] font-semibold tracking-wide
              rounded-full
              hover:bg-white/12 active:scale-[0.97]
              transition-all duration-150 cursor-pointer
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
            "
          >
            See More
          </a>
        </div>
      </section>

      {/* ── Bottom bar ───────────────────────────────────────────────────── */}
      <footer
        className="
          absolute bottom-0 inset-x-0 z-20
          flex items-end justify-between
          px-6 sm:px-10 pb-6 sm:pb-8
          text-white font-[family-name:var(--font-dm)]
        "
        aria-label="Footer tagline"
      >
        <div>
          <p className="text-[13px] sm:text-[15px] font-bold leading-snug mb-1">
            100% Handmade &amp; Organic
          </p>
          <p className="text-[10.5px] sm:text-[11.5px] opacity-68 leading-relaxed max-w-[260px] sm:max-w-xs">
            Baked by hand with traditional techniques, from<br className="hidden sm:block" />
            clean, natural, and organic sources.
          </p>
        </div>
        <p className="text-[10.5px] opacity-50 tracking-widest self-end">©2025</p>
      </footer>
    </main>
  );
}
