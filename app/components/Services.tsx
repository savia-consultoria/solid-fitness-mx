type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SERVICES: Service[] = [
  {
    title: "Pesas y musculación",
    description:
      "Equipo profesional de barras, mancuernas y máquinas para hipertrofia y fuerza pura.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...stroke}>
        <path d="M2 12h2M20 12h2M6 7v10M18 7v10M9 5v14M15 5v14M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Crossfit & Funcional",
    description:
      "Box equipado con kettlebells, cuerdas, cajones y rig olímpico. WODs diarios.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3v18M5 5l14 14M19 5L5 19" />
      </svg>
    ),
  },
  {
    title: "Clases grupales",
    description:
      "Spinning, HIIT, GAP y Body Combat. Energía contagiosa para mantenerte motivado.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...stroke}>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <circle cx="17" cy="9" r="2" />
        <path d="M21 21v-1.5a2.5 2.5 0 00-2.5-2.5H17" />
      </svg>
    ),
  },
  {
    title: "Coaching 1 a 1",
    description:
      "Plan personalizado, seguimiento semanal y resultados medibles con tu coach asignado.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...stroke}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0116 0" />
        <path d="M16 4l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Cardio & HIIT",
    description:
      "Caminadoras, escaladoras y bicis premium. Quema calorías sin perder músculo.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...stroke}>
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: "Nutrición deportiva",
    description:
      "Asesoría con nutriólogo deportivo certificado. Tu plan alimenticio + suplementación.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...stroke}>
        <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-bone py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
              Lo que hacemos
            </span>
            <h2 className="heading-display mt-5 text-balance text-4xl text-ink sm:text-5xl lg:text-6xl">
              Todo bajo un mismo techo
              <span className="text-flame">.</span>
            </h2>
            <p className="mt-5 text-base text-ink/70 sm:text-lg">
              Seis disciplinas, infinitas formas de transformarte. Elige la
              tuya o combínalas todas con tu membresía única.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-ink/15 bg-transparent px-5 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-bone"
          >
            Ver membresías
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, idx) => (
            <article
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame/30 hover:shadow-flame"
            >
              <span
                aria-hidden
                className="absolute right-5 top-5 font-display text-5xl font-black text-ink/5 transition-colors group-hover:text-flame/15"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-flame transition-colors group-hover:bg-flame group-hover:text-bone">
                {s.icon}
              </div>

              <h3 className="heading-display mt-6 text-xl text-ink sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">
                {s.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-flame opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Saber más
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
