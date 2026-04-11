import type { Metadata, Viewport } from "next"; // Додано Viewport для швидкості
import { Montserrat, Inter } from "next/font/google";
import '../styles/globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// Оптимізований Montserrat
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true, // Явно вказуємо preload
});

// Оптимізований Inter
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// Налаштування Viewport окремо (вимога нових версій Next.js для SEO та швидкості)
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // Твій існуючий metadata залишається без змін
  title: {
    default: "NG Consulting | Moderní webová řešení a digitální marketing",
    template: "%s | NG Consulting"
  },
  description: "Pomáháme firmám růst v digitálním světě skrze moderní technologie, tvorbu webů a strategický marketing.",
  // ... решта твоїх налаштувань
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Додаємо обидві змінні та inter.className для базового тексту
    <html lang="cs" className={`${montserrat.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <Header /> 
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
