import { BUSINESS } from "../lib/business";

export default function Location() {
  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden bg-ink py-24 text-bone sm:py-32"
    >
      <div
        aria-hidden
        className="absolute right-1/3 top-0 h-2 w-44 bg-flame"
      />

      <div className="container-x">
        <div className="grid items-stretch gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-bone/80">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
              Encuéntranos
            </span>
            <h2 className="heading-display mt-5 text-balance text-4xl sm:text-5xl">
              Tu próxima rutina
              <br />
              <span className="text-flame">empieza aquí.</span>
            </h2>
            <p className="mt-5 text-base text-bone/70 sm:text-lg">
              Estamos en el corazón de Querétaro con estacionamiento amplio,
              vestidores premium y regaderas con agua caliente 24/7.
            </p>

            <div className="mt-10 space-y-6 border-t border-bone/10 pt-8">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-flame">
                  Dirección
                </p>
                <p className="mt-1.5 font-display text-xl font-bold leading-snug">
                  {BUSINESS.city}
                </p>
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex cursor-pointer items-center gap-2 text-sm font-bold uppercase tracking-wider text-flame transition-colors hover:text-flame-400"
                >
                  Cómo llegar
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
              </div>

              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-flame">
                  Horarios
                </p>
                <ul className="mt-3 space-y-2">
                  {BUSINESS.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-bone/10 pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-bone/70">
                        {h.day}
                      </span>
                      <span className="font-display text-base font-bold tabular-nums">
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-flame">
                  Contacto directo
                </p>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="mt-1.5 block font-display text-xl font-bold leading-snug hover:text-flame"
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl ring-1 ring-bone/15">
              <iframe
                title="Ubicación Solid Fitness Mx en Querétaro"
                src={BUSINESS.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full grayscale-[0.4] contrast-[1.05]"
                style={{ border: 0 }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-bone/10"
              />
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-bone/95 px-5 py-4 text-ink shadow-ink backdrop-blur transition-transform hover:-translate-y-0.5 sm:right-auto"
              >
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-flame">
                    Solid Fitness Mx
                  </p>
                  <p className="font-display text-base font-bold">
                    Abrir en Google Maps
                  </p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-flame text-bone">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
