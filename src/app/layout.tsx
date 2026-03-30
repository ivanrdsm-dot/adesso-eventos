import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adesso-eventos.vercel.app'),
  title: {
    default: "ADESSO Eventos | Producción de Congresos Médicos y Eventos Corporativos en México",
    template: "%s | ADESSO Eventos",
  },
  description: "Más de 35 años produciendo congresos médicos, convenciones corporativas y eventos empresariales de clase mundial en todo México. Tecnología RFID, pantallas LED, escenografía personalizada, banquetes y producción integral. +2,000 eventos producidos.",
  keywords: [
    "congresos médicos México",
    "producción de eventos CDMX",
    "eventos corporativos México",
    "organizador congresos médicos",
    "producción congresos médicos",
    "pantallas LED eventos",
    "RFID eventos",
    "banquetes corporativos",
    "escenografía eventos",
    "streaming eventos híbridos",
    "empresa de eventos México",
    "producción audiovisual eventos",
    "convenciones corporativas",
    "eventos empresariales México",
    "catering eventos México",
  ],
  authors: [{ name: "ADESSO Producciones y Banquetes" }],
  creator: "ADESSO Eventos",
  publisher: "ADESSO Producciones y Banquetes",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
    siteName: "ADESSO Eventos",
    title: "ADESSO Eventos | +35 Años Produciendo Congresos Médicos en México",
    description: "Líderes en producción de congresos médicos, convenciones corporativas y eventos empresariales. Tecnología de vanguardia, pantallas LED, RFID y producción integral.",
    images: [
      {
        url: "/images/gala-led-screens.webp",
        width: 1200,
        height: 630,
        alt: "ADESSO Eventos - Producción de Congresos Médicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADESSO Eventos | Producción de Congresos Médicos y Eventos Corporativos",
    description: "+35 años produciendo congresos médicos y eventos corporativos de clase mundial en México.",
    images: ["/images/gala-led-screens.webp"],
  },
  alternates: {
    canonical: "https://adesso-eventos.vercel.app",
  },
  category: "Events & Production",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  name: "ADESSO Producciones y Banquetes",
  alternateName: "ADESSO Eventos",
  description: "Empresa líder en producción de congresos médicos, convenciones corporativas y eventos empresariales en México con más de 35 años de experiencia.",
  url: "https://adesso-eventos.vercel.app",
  telephone: ["+525555248542", "+525555249680", "+525510703056"],
  email: "asoto@adessomexico.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "José Ma. Olloqui 222",
    addressLocality: "Col. Acacias, Benito Juárez",
    addressRegion: "CDMX",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.3722,
    longitude: -99.1672,
  },
  foundingDate: "1989",
  areaServed: {
    "@type": "Country",
    name: "Mexico",
  },
  knowsAbout: [
    "Medical Congress Production",
    "Corporate Event Planning",
    "LED Screen Rental",
    "RFID Access Control",
    "Event Catering",
    "Hybrid Event Production",
    "Scenic Design",
    "Audiovisual Production",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "150",
    bestRating: "5",
  },
  priceRange: "$$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
