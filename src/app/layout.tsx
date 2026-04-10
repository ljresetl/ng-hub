import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import '../styles/globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// Налаштування Montserrat
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap", 
});

// Налаштування Inter
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NG Consulting | Moderní webová řešení a digitální marketing",
    template: "%s | NG Consulting"
  },
  description: "Pomáháme firmám růst v digitálním světě skrze moderní technologie, tvorbu webů a strategický marketing.",
  keywords: ["tvorba webu", "digitální marketing", "NG Consulting", "SEO"],
  alternates: {
    canonical: "https://ngconsulting.cz",
  },
  openGraph: {
    title: "NG Consulting | Moderní webová řešení",
    description: "Tvoříme weby, které prodávají.",
    url: "https://ngconsulting.cz",
    siteName: "NG Consulting",
    locale: "cs_CZ",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        {/* Рядки preconnect видалено, щоб уникнути помилок про невикористані джерела */}
      </head>
      <body className={inter.className}>
        <Header /> 
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
