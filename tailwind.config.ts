import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1A1A2E",
          900: "#0E0E1C",
          800: "#1A1A2E",
          700: "#262640",
          600: "#3A3A55",
        },
        flame: {
          DEFAULT: "#39E03A",
          600: "#27C328",
          500: "#39E03A",
          400: "#6FF36F",
        },
        bone: {
          DEFAULT: "#F5F5F5",
          100: "#FAFAFA",
          200: "#EFEFEF",
        },
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        sans: ["var(--font-dmsans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        flame: "0 20px 60px -15px rgba(57, 224, 58, 0.55)",
        ink: "0 30px 80px -25px rgba(26, 26, 46, 0.45)",
      },
      backgroundImage: {
        "grid-flame":
          "linear-gradient(135deg, rgba(57,224,58,0.15) 0%, rgba(26,26,46,0) 50%)",
        noise:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      },
      animation: {
        "fade-up": "fadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "ticker": "ticker 40s linear infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.04)", opacity: "0.92" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
