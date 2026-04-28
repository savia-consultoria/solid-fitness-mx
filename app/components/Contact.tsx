"use client";

import { useState } from "react";
import { BUSINESS } from "../lib/business";

const SERVICES = [
  "Pesas y musculación",
  "Crossfit & Funcional",
  "Clases grupales",
  "Coaching 1 a 1",
  "Cardio & HIIT",
  "Nutrición deportiva",
  "Aún no lo sé, asesórenme",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const text = encodeURIComponent(
      `Hola Solid Fitness Mx, soy ${name}.\nTel: ${phone}\nInterés: ${service}\n\n${message}`
    );
    window.open(`https://wa.me/${BUSINESS.phoneRaw}?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <section id="contacto" className="relative bg-bone py-24 sm:py-32">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] bg-ink text-bone shadow-ink">
          <div className="grid lg:grid-cols-2">
            {/* Left: copy + WhatsApp */}
            <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
              <div
                aria-hidden
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-flame/25 blur-3xl"
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-bone/80">
                <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                Agenda hoy
              </span>

              <h2 className="heading-display mt-5 text-balance text-4xl sm:text-5xl">
                Tu primera clase
                <br />
                <span className="text-flame">va por la casa.</span>
              </h2>

              <p className="mt-5 text-base text-bone/70 sm:text-lg">
                Déjanos tus datos y un coach te contacta en menos de 30 minutos
                en horario laboral. Sin compromisos, sin letra chica.
              </p>

              <a
                href={BUSINESS.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex cursor-pointer items-center gap-3 rounded-full bg-flame px-7 py-4 text-sm font-bold uppercase tracking-wider text-bone shadow-flame transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-bone">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.41c-.003 6.554-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.39l-.999 3.648 3.893-1.737z" />
                </svg>
                Hablar directo por WhatsApp
              </a>

              <div className="mt-10 space-y-5 border-t border-bone/10 pt-8">
                <ContactRow
                  label="Teléfono"
                  value={BUSINESS.phone}
                  href={`tel:${BUSINESS.phoneRaw}`}
                  icon={
                    <path d="M22 16.92V21a1 1 0 01-1.09 1 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 013.21 4.18 1 1 0 014.21 3h4.09a1 1 0 011 .75c.13.96.37 1.91.71 2.81a1 1 0 01-.22 1.06L8.09 9.32a16 16 0 006 6l1.7-1.7a1 1 0 011.06-.22c.9.34 1.85.58 2.81.71a1 1 0 01.75 1z" />
                  }
                />
                <ContactRow
                  label="Ubicación"
                  value={BUSINESS.city}
                  href="#ubicacion"
                  icon={
                    <>
                      <path d="M12 2a8 8 0 018 8c0 5.25-8 12-8 12S4 15.25 4 10a8 8 0 018-8z" />
                      <circle cx="12" cy="10" r="3" />
                    </>
                  }
                />
                <ContactRow
                  label="Tiempo de respuesta"
                  value="Menor a 30 minutos"
                  icon={
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </>
                  }
                />
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-bone p-8 text-ink sm:p-12 lg:p-16">
              <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-flame">
                Formulario rápido
              </p>
              <h3 className="heading-display mt-2 text-2xl sm:text-3xl">
                Cuéntanos de ti
              </h3>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <Field id="name" label="Nombre" required>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre completo"
                    className={inputClass}
                  />
                </Field>

                <Field id="phone" label="Teléfono / WhatsApp" required>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="442 123 4567"
                    className={inputClass}
                  />
                </Field>

                <Field id="service" label="¿Qué te interesa?" required>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path fill=%22none%22 stroke=%22%231A1A2E%22 stroke-width=%221.6%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M1 1l5 5 5-5%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10`}
                  >
                    <option value="" disabled>
                      Elige un servicio
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="message" label="Mensaje (opcional)">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Cuéntanos tu objetivo o pregunta…"
                    className={inputClass}
                  />
                </Field>

                <button
                  type="submit"
                  className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-ink py-4 text-sm font-bold uppercase tracking-wider text-bone shadow-ink transition-transform duration-200 hover:scale-[1.01] active:scale-[0.98]"
                >
                  Enviar y agendar
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>

                {sent && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="rounded-xl bg-flame/10 px-4 py-3 text-sm font-medium text-flame"
                  >
                    ¡Listo! Abrimos WhatsApp con tu mensaje. Te respondemos en
                    minutos.
                  </p>
                )}

                <p className="text-xs text-ink/50">
                  Al enviar aceptas que te contactemos por teléfono o WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "block w-full rounded-xl border border-ink/15 bg-bone-100 px-4 py-3.5 text-base text-ink placeholder:text-ink/40 outline-none transition-all duration-150 focus:border-flame focus:bg-white focus:ring-4 focus:ring-flame/20";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ink/65"
      >
        {label} {required && <span className="text-flame">*</span>}
      </label>
      {children}
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-bone/10 text-flame">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </span>
      <span>
        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-bone/55">
          {label}
        </span>
        <span className="mt-1 block font-display text-base font-bold">
          {value}
        </span>
      </span>
    </>
  );

  return href ? (
    <a href={href} className="flex cursor-pointer items-center gap-4 transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4">{content}</div>
  );
}
