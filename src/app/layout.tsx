import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google"; // Імпортуємо шрифти
import '../styles/globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

<link rel="preload" href="/1024.avif" as="image" fetchpriority="high" />
<link rel="preload" href="/1024G.avif" as="image" fetchpriority="high" />
  

// Налаштування Montserrat для заголовків
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat", // Змінна для CSS
  display: "swap",
});

// Налаштування Inter для основного тексту
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter", // Змінна для CSS
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NG Consulting | Moderní webová řešení a digitální marketing",
    template: "%s | NG Consulting"
  },
  description: "Pomáháme firmám růst v digitálním světě skrze moderní technologie, tvorbu webů a strategický marketing. Vaše digitální budoucnost začíná zde.",
  
  keywords: [
    "tvorba webu", 
    "digitální marketing", 
    "NG Consulting", 
    "vývoj aplikací", 
    "SEO optimalizace",
    "Jablonec nad Nisou",
    "webdesign"
  ],

  openGraph: {
    title: "NG Consulting | Moderní webová řešení",
    description: "Tvoříme weby, které prodávají. Profesionální přístup k vašemu digitálnímu růstu.",
    url: "https://ngconsulting.cz", // Офіційний домен
    siteName: "NG Consulting",
    locale: "cs_CZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NG Consulting | Digitální agentura",
    description: "Moderní webová řešení a marketing.",
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
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <Header /> 
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
