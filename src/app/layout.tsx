import type { Metadata } from "next";
import '../styles/globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer'; // Не забудь додати футер, який ми робили

export const metadata: Metadata = {
  // Головний заголовок сторінки
  title: {
    default: "NG-HUB | Moderní webová řešení a digitální marketing",
    template: "%s | NG-HUB"
  },
  // Опис для пошуковиків
  description: "Pomáháme firmám růst v digitálním světě skrze moderní technologie, tvorbu webů a strategický marketing. Vaše digitální budoucnost začíná zde.",
  
  // Ключові слова (хоча Google їх майже не враховує, для порядку можна мати)
  keywords: ["tvorba webu", "digitální marketing", "NG-HUB", "vývoj aplikací", "SEO optimalizace"],

  // Налаштування для соцмереж (Facebook, LinkedIn тощо)
  openGraph: {
    title: "NG-HUB | Moderní webová řešení",
    description: "Tvoříme weby, které prodávají. Profesionální přístup k vašemu digitálnímu růstu.",
    url: "https://ng-hub.cz", // Заміни на свій реальний домен
    siteName: "NG-HUB",
    locale: "cs_CZ",
    type: "website",
  },

  // Налаштування для Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "NG-HUB | Digitální agentura",
    description: "Moderní webová řešení a marketing.",
  },

  // Іконки (favicon)
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
    <html lang="cs">
      <body>
        <Header /> 
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}