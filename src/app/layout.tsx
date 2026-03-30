import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADESSO Eventos | Producción de Congresos Médicos y Eventos Corporativos en México",
  description: "Más de 35 años produciendo congresos médicos, convenciones corporativas y eventos empresariales de clase mundial en todo México. Tecnología de vanguardia, escenografía y producción integral.",
  keywords: "congresos médicos, eventos corporativos, producción de eventos, México, CDMX, convenciones, banquetes, tecnología eventos, RFID, streaming",
  openGraph: {
    title: "ADESSO Eventos | +35 Años de Excelencia en Producción de Eventos",
    description: "Líderes en la producción de congresos médicos y eventos corporativos en México.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
