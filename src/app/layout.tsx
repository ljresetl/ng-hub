import '../styles/globals.scss'; // Твої глобальні стилі
import Header from '@/components/Header/Header';

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
      </body>
    </html>
  );
}