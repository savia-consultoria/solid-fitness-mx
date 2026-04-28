const REVIEWS = [
  {
    name: "Andrea Martínez",
    role: "Miembro desde 2023",
    initial: "A",
    rating: 5,
    text: "El mejor gimnasio al que he ido en Querétaro. Los entrenadores son súper atentos y te corrigen siempre la postura. En 3 meses bajé 8 kg y subí fuerza increíblemente.",
  },
  {
    name: "Carlos Reyes",
    role: "Miembro desde 2024",
    initial: "C",
    rating: 5,
    text: "Equipo nuevo, instalaciones limpias y ambiente brutal. Las clases de crossfit están al nivel de las grandes ciudades. 100% recomendado, vale cada peso.",
  },
  {
    name: "Mariana Hernández",
    role: "Miembro desde 2024",
    initial: "M",
    rating: 5,
    text: "Llegué sin saber por dónde empezar y el coach me armó un plan que de verdad funcionó. La comunidad es lo mejor: motivan, te saludan, te empujan. Mi segundo hogar.",
  },
];

export default function Reviews() {
  return (
    <section id="resenas" className="relative bg-bone py-24 sm:py-32">
      <div className="container-x">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
              Reseñas verificadas
            </span>
            <h2 className="heading-display mt-5 text-balance text-4xl text-ink sm:text-5xl lg:text-6xl">
              Lo que dicen
              <br />
              quienes ya entrenan aquí.
            </h2>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-5 lg:col-span-5">
            <div className="flex items-center gap-4">
              <GoogleBadge />
              <div>
                <p className="font-display text-3xl font-black text-ink">
                  5.0
                  <span className="ml-2 text-sm font-medium uppercase tracking-wider text-ink/60">
                    / 5.0
                  </span>
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <Stars n={5} />
                  <span className="text-sm font-medium text-ink/70">
                    42 reseñas en Google
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              className="group relative flex flex-col rounded-3xl border border-ink/5 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame/30 hover:shadow-flame"
            >
              <svg
                viewBox="0 0 32 24"
                className="h-7 w-7 fill-flame opacity-90"
                aria-hidden
              >
                <path d="M0 24V12C0 5.4 5.4 0 12 0v6c-3.3 0-6 2.7-6 6v2h6v10H0zm20 0V12c0-6.6 5.4-12 12-12v6c-3.3 0-6 2.7-6 6v2h6v10H20z" />
              </svg>

              <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/80">
                {r.text}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ink font-display text-lg font-black text-flame">
                  {r.initial}
                </span>
                <div>
                  <p className="font-semibold text-ink">{r.name}</p>
                  <p className="text-xs text-ink/55">{r.role}</p>
                </div>
                <div className="ml-auto">
                  <Stars n={r.rating} />
                </div>
              </div>

              <span
                aria-hidden
                className="absolute right-7 top-7 text-xs font-bold uppercase tracking-[0.18em] text-ink/30"
              >
                #{i + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <span className="flex" aria-label={`${n} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < n ? "fill-flame" : "fill-ink/15"}`}
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleBadge() {
  return (
    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink/5">
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
        />
      </svg>
    </div>
  );
}
