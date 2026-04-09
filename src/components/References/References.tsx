"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import confetti from "canvas-confetti"; 
import styles from "./References.module.scss";
import referencesData from "@/data/references.json";

const References: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2000, stopOnMouseEnter: true, stopOnInteraction: false })
  ]);

  // Функція вибуху салюту саме з місця наведення
  const fireConfetti = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Обчислюємо центр картки у відсотках від ширини та висоти вікна
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // Створюємо масивний вибух
    const count = 150;
    const defaults = {
      origin: { x, y }, // Початок вибуху прямо з картки
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    // Робимо вибух об'ємним (різні напрямки та сила)
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  return (
    <section className={styles.references} id="references">
      <div className="container">
        <header className={styles.header}>
          <h2>Vybrané reference</h2>
          <div className={styles.line}></div>
        </header>

        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {referencesData.map((ref) => (
              <div className={styles.embla__slide} key={ref.id}>
                <a 
                  href={ref.webUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.logoCard}
                  onMouseEnter={(e) => fireConfetti(e)} // Передаємо івент
                >
                  <div className={styles.logoWrapper}>
                    <img 
                      src={`https://logo.clearbit.com/${ref.domain}?size=200`} 
                      alt={ref.name}
                      className={styles.logoImage}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement?.classList.add(styles.noImage);
                      }}
                    />
                    <span className={styles.fallbackText}>{ref.name}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;