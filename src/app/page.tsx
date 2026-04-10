// src/app/page.tsx
import Foto from '@/components/Foto/Foto';
import Projects from '@/components/Projects/Projects';
import Kontakt from '@/components/Kontakt/Kontakt';
import References from '@/components/References/References';
import Maps from '@/components/Maps/Maps';

export default function Home() {
  return (
    <main className="fade_in">
      {/* 1. Головна секція зі слайдером (6 варіантів фото) */}
      <Foto />
      <Projects />
<References />
<Kontakt />
      <Maps />
    </main>
  );
}