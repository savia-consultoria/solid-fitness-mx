"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { BUSINESS } from "../lib/business";

const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué", href: "#por-que" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bone/90 shadow-[0_8px_30px_-15px_rgba(26,26,46,0.25)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="shrink-0" aria-label="Solid Fitness Mx — Inicio">
          <Logo variant={scrolled ? "dark" : "light"} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/75 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden cursor-pointer items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold uppercase tracking-wide text-bone shadow-ink transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:inline-flex"
          >
            Empieza hoy
            <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-flame" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-ink text-bone lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-ink text-bone lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-300 ease-out`}
      >
        <nav className="container-x flex flex-col gap-1 py-4" aria-label="Móvil">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-semibold text-bone/90 hover:bg-ink-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href={BUSINESS.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-flame px-5 py-3 text-sm font-bold uppercase tracking-wide text-bone"
          >
            WhatsApp directo
          </a>
        </nav>
      </div>
    </header>
  );
}
