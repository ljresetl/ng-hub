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
  
  // Додаємо preload через metadata для кращого SEO та LCP
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
        {/* ПРІОРИТЕТНЕ ЗАВАНТАЖЕННЯ ЗОБРАЖЕНЬ (LCP FIX) */}
        {/* Це змушує браузер почати качати фото ще до того, як завантажиться JS-код анімації */}
        <link 
          rel="preload" 
          href="/1024.avif" 
          as="image" 
          type="image/avif" 
          fetchPriority="high" 
        />
        <link 
          rel="preload" 
          href="/1024G.avif" 
          as="image" 
          type="image/avif" 
          fetchPriority="high" 
        />
      </head>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <Header /> 
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
