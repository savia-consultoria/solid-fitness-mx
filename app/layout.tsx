import type { Metadata, Viewport } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://solidfitness.mx";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Solid Fitness Mx | Gimnasio en Querétaro",
  description:
    "Transforma tu cuerpo en Solid Fitness Mx, el gimnasio en Querétaro con calificación 5★ en Google. Entrenamiento personalizado, clases grupales y comunidad real. ¡Agenda tu primera clase gratis!",
  keywords: [
    "gimnasio Querétaro",
    "Solid Fitness Mx",
    "entrenamiento personalizado Querétaro",
    "gym Querétaro",
    "crossfit Querétaro",
    "clases grupales fitness",
  ],
  authors: [{ name: "Solid Fitness Mx" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Solid Fitness Mx",
    title: "Solid Fitness Mx | Gimnasio en Querétaro",
    description:
      "Gimnasio 5★ en Querétaro. Entrenamiento personalizado, clases grupales y resultados reales. Agenda hoy.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Solid Fitness Mx — Gimnasio en Querétaro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solid Fitness Mx | Gimnasio en Querétaro",
    description:
      "Gimnasio 5★ en Querétaro. Resultados reales con entrenamiento personalizado.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1A1A2E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}

        {/* Google Analytics — placeholder. Reemplaza G-XXXXXXX por tu ID. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>

        {/* JSON-LD para SEO local */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthClub",
            name: "Solid Fitness Mx",
            image:
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
            url: SITE_URL,
            telephone: "+524463754443",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Querétaro",
              addressRegion: "Qro.",
              addressCountry: "MX",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "42",
            },
            priceRange: "$$",
          })}
        </Script>
      </body>
    </html>
  );
}
