import Logo from "./Logo";
import { BUSINESS } from "../lib/business";

const QUICK = [
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué elegirnos", href: "#por-que" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-bone">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flame via-flame to-transparent"
      />
      <div className="container-x py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-balance text-bone/65">
              {BUSINESS.tagline} El gimnasio mejor calificado de Querétaro.
              Únete a la comunidad que sí cumple sus metas.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Solid Fitness Mx"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-bone/15 transition-colors hover:bg-flame hover:text-bone"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href={BUSINESS.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Solid Fitness Mx"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-bone/15 transition-colors hover:bg-flame hover:text-bone"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.41c-.003 6.554-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.39l-.999 3.648 3.893-1.737z" />
                </svg>
              </a>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                aria-label="Llamar a Solid Fitness Mx"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-bone/15 transition-colors hover:bg-flame hover:text-bone"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92V21a1 1 0 01-1.09 1 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 013.21 4.18 1 1 0 014.21 3h4.09a1 1 0 011 .75c.13.96.37 1.91.71 2.81a1 1 0 01-.22 1.06L8.09 9.32a16 16 0 006 6l1.7-1.7a1 1 0 011.06-.22c.9.34 1.85.58 2.81.71a1 1 0 01.75 1z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-flame">
              Navegación
            </p>
            <ul className="mt-5 space-y-3">
              {QUICK.map((q) => (
                <li key={q.href}>
                  <a
                    href={q.href}
                    className="text-sm text-bone/75 transition-colors hover:text-flame"
                  >
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-flame">
              Contacto
            </p>
            <ul className="mt-5 space-y-3 text-sm text-bone/75">
              <li>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-flame">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>{BUSINESS.city}</li>
              <li className="pt-2">
                <a
                  href="#contacto"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-flame px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-bone shadow-flame transition-transform duration-200 hover:scale-[1.03]"
                >
                  Agenda tu primera clase
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-bone/10 pt-6 text-xs text-bone/50 sm:flex-row sm:items-center">
          <p>
            © 28/4/{BUSINESS.year} {BUSINESS.name}. Todos los derechos
            reservados.
          </p>
          <p className="flex items-center gap-2">
            Hecho con disciplina en Querétaro
            <span className="h-1.5 w-1.5 rounded-full bg-flame" aria-hidden />
          </p>
        </div>
      </div>
    </footer>
  );
}
