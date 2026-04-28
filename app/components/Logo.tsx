type Props = { variant?: "light" | "dark"; className?: string };

export default function Logo({ variant = "dark", className = "" }: Props) {
  const textColor = variant === "light" ? "text-bone" : "text-ink";
  const subtleColor = variant === "light" ? "text-bone/70" : "text-ink/65";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-9 w-9 fill-flame"
      >
        <path d="M7 7 L24 7 L16 15 L7 15 A4 4 0 0 0 7 7 Z" />
        <path d="M18 17 L25 17 A4 4 0 0 1 25 25 L10 25 Z" />
      </svg>
      <span
        className={`font-display text-[1.05rem] font-black uppercase leading-none tracking-tight ${textColor}`}
      >
        Solid<span className="text-flame">Fit</span>
        <span
          className={`block text-[0.62rem] font-bold uppercase tracking-[0.28em] ${subtleColor}`}
        >
          Querétaro
        </span>
      </span>
    </div>
  );
}
