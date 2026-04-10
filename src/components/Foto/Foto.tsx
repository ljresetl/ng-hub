"use client";

import React from "react";
import Image from "next/image"; // Імпортуємо Image
import TextAnimation from "./TextAnimation";
import styles from "./Foto.module.scss";

const HERO_TEXT_1 = "Vaše digitální symfonie.";
const HERO_TEXT_2 = "My dirigujeme – vy si vychutnáváte výsledek.";

const Foto: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          
          {/* Використовуємо Next.js Image для автоматичної оптимізації */}
          <Image 
            src="/1024.avif" 
            alt="NG Consulting Hero" 
            fill // Заповнює батьківський контейнер
            priority // Найвищий пріоритет (LCP Fix)
            className={styles.heroImg}
            sizes="100vw" // Каже браузеру, що картинка на весь екран
            quality={75} // Трохи зменшуємо якість для швидкості (непомітно для ока)
          />

          <div className={styles.textOverlay}>
            <div className={styles.textContainer}>
              <div className={styles.line1}>
                <TextAnimation text={HERO_TEXT_1} />
              </div>
              <div className={styles.line2}>
                <TextAnimation text={HERO_TEXT_2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foto;
