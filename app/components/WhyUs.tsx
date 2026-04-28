import Image from "next/image";

const REASONS = [
  {
    title: "5★ verificado en Google",
    description:
      "42 reseñas reales que avalan la experiencia. Cero fakes, cero atajos.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      </svg>
    ),
  },
  {
    title: "Coaches certificados",
    description:
      "Equipo con certificaciones internacionales en fuerza, crossfit y nutrición deportiva.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Equipo premium",
    description:
      "Marcas líderes: Hammer Strength, Rogue, Concept2. Renovado cada 18 meses.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h18M3 12h18M3 17h18" />
        <circle cx="6" cy="7" r="1.5" fill="currentColor" />
        <circle cx="14" cy="12" r="1.5" fill="currentColor" />
        <circle cx="9" cy="17" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Comunidad real",
    description:
      "Más de 500 miembros activos. Aquí no entrenas solo: te empuja todo el equipo.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <circle cx="17" cy="9" r="2" />
        <path d="M21 21v-1a3 3 0 00-3-3h-1" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section
      id="por-que"
      className="relative overflow-hidden bg-ink py-24 text-bone sm:py-32"
    >
      {/* Pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-flame/20 blur-3xl"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Image side */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-bone/10">
              <Image
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
                alt="Coach guiando una sesión de entrenamiento personalizado"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            </div>

            {/* Big stat overlay */}
            <div className="absolute -right-4 -top-4 hidden rounded-3xl bg-flame p-5 text-center shadow-flame sm:block">
              <p className="heading-display text-5xl leading-none">5.0</p>
              <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em]">
                Google Rating
              </p>
            </div>

            <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-bone/15 bg-ink-700/90 px-5 py-4 backdrop-blur sm:block">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-flame">
                Promedio de transformación
              </p>
              <p className="mt-1 font-display text-2xl font-black">12 semanas</p>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-bone/80">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
              Por qué elegirnos
            </span>

            <h2 className="heading-display mt-5 text-balance text-4xl sm:text-5xl lg:text-6xl">
              No somos un gym más.
              <br />
              Somos <span className="text-flame">tu próximo nivel.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base text-bone/70 sm:text-lg">
              Construimos un espacio donde cada detalle empuja tu rendimiento.
              Esto es lo que nos pone arriba del resto.
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {REASONS.map((r) => (
                <li
                  key={r.title}
                  className="group rounded-2xl border border-bone/10 bg-bone/[0.02] p-5 transition-colors hover:bg-bone/[0.05]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-flame text-bone">
                    {r.icon}
                  </div>
                  <h3 className="heading-display mt-4 text-lg">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone/65">
                    {r.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
