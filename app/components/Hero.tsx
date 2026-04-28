import Image from "next/image";
import { BUSINESS } from "../lib/business";

const STATS = [
  { value: "5★", label: "42 reseñas Google" },
  { value: "+500", label: "miembros activos" },
  { value: "18h", label: "abierto al día" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink text-bone"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/0 to-ink" />
      </div>

      {/* Decorative flame block */}
      <div
        aria-hidden
        className="absolute -right-20 top-24 hidden h-[420px] w-[420px] rotate-12 rounded-[64px] bg-flame/15 blur-2xl lg:block"
      />
      <div
        aria-hidden
        className="absolute right-10 top-32 hidden h-3 w-44 bg-flame lg:block"
      />

      <div className="container-x relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="animate-fade-up lg:col-span-7">
            {/* Trust badge */}
            <a
              href="#resenas"
              className="inline-flex items-center gap-3 rounded-full border border-bone/15 bg-bone/5 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-bone/10"
            >
              <span className="flex" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-flame" aria-hidden>
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9z" />
                  </svg>
                ))}
              </span>
              <span className="font-semibold">5.0 en Google</span>
              <span className="opacity-70">· 42 reseñas reales</span>
            </a>

            <h1 className="heading-display mt-7 text-balance text-[2.7rem] leading-[0.95] sm:text-6xl lg:text-[5.25rem]">
              Forja la versión
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">más fuerte</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1.5 -z-0 h-3 bg-flame sm:bottom-2 sm:h-4"
                />
              </span>
              <br />
              <span className="text-flame">de ti.</span>
            </h1>

            <p className="mt-7 max-w-xl text-balance text-base text-bone/75 sm:text-lg">
              El gimnasio en Querétaro donde la disciplina se vuelve hábito y
              los resultados son reales. Equipo de élite, coaches certificados
              y la energía que necesitas para no rendirte.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-flame px-7 py-4 text-sm font-bold uppercase tracking-wider text-bone shadow-flame transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                Agenda tu primera clase gratis
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href={BUSINESS.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-bone/25 px-7 py-4 text-sm font-bold uppercase tracking-wider text-bone transition-colors hover:bg-bone/5"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-flame">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.41c-.003 6.554-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.39l-.999 3.648 3.893-1.737z" />
                </svg>
                Hablar por WhatsApp
              </a>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-bone/10 pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-bone/55">
                    {s.label}
                  </dt>
                  <dd className="heading-display mt-1 text-3xl text-flame sm:text-4xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Image card */}
          <div className="relative animate-fade-up lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-ink ring-1 ring-bone/10">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
                alt="Atleta entrenando con pesas en Solid Fitness Mx Querétaro"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-flame">
                  Sesión 1 / Gratis
                </p>
                <p className="mt-1 text-lg font-semibold">
                  Descubre por qué somos el gym mejor calificado de Querétaro.
                </p>
              </div>
            </div>

            {/* Floating mini-card */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-bone p-4 text-ink shadow-2xl sm:block lg:-left-10">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-bone">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-flame" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider opacity-60">
                    Comunidad
                  </p>
                  <p className="font-display text-base font-bold leading-tight">
                    +500 personas
                    <br />
                    transformándose hoy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative border-y border-bone/10 bg-ink-900/60 py-4">
        <div className="flex animate-ticker gap-12 whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.2em] text-bone/60">
          {Array.from({ length: 2 }).map((_, group) => (
            <div key={group} className="flex shrink-0 gap-12">
              {[
                "Pesas libres",
                "Clases grupales",
                "Crossfit",
                "Coaching 1:1",
                "Cardio HIIT",
                "Nutrición",
                "Funcional",
                "Spinning",
              ].map((w, i) => (
                <span key={i} className="flex items-center gap-12">
                  {w}
                  <span className="h-1.5 w-1.5 rounded-full bg-flame" aria-hidden />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
