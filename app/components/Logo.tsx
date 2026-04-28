type Props = { variant?: "light" | "dark"; className?: string };

export default function Logo({ variant = "dark", className = "" }: Props) {
  const ink = variant === "light" ? "#F5F5F5" : "#1A1A2E";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-flame shadow-flame">
        <span className="absolute inset-1 rounded-lg bg-ink" />
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="relative h-5 w-5 fill-flame"
        >
          <path d="M5 7h2v10H5zM17 7h2v10h-2zM8 11h8v2H8zM3 9h1v6H3zM20 9h1v6h-1z" />
        </svg>
      </span>
      <span
        className="font-display text-[1.05rem] font-black uppercase leading-none tracking-tight"
        style={{ color: ink }}
      >
        Solid<span className="text-flame">Fit</span>
        <span className="block text-[0.62rem] font-bold uppercase tracking-[0.28em] opacity-70">
          Querétaro
        </span>
      </span>
    </div>
  );
}
