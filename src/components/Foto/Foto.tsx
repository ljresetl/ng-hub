"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Використовуємо для пріоритету
import TextAnimation from "./TextAnimation";
import styles from "./Foto.module.scss";

const bannerSrc = "/1024.avif"; 

// Для мобільних пристроїв зменшуємо кількість деталей, щоб процесор не "гальмував"
const COLUMNS = 7; 
const ROWS = 5;

const HERO_TEXT = "Vaše digitální symfonie. My dirigujeme – vy si vychutnáváte výsledek.";

const Foto: React.FC = () => {
  const bricksArray = Array.from({ length: COLUMNS * ROWS }, (_, i) => i);

  return (
    <section className={styles.hero}>
      {/* ПРІОРИТЕТНЕ ЗАВАНТАЖЕННЯ ДЛЯ GOOGLE (LCP FIX) */}
      <div className={styles.lcpOptimizer}>
        <Image 
          src={bannerSrc} 
          alt="Hero background" 
          fill
          priority 
          quality={75}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          
          {/* ФОН, ЯКИЙ ВИДИМИЙ ВІДРАЗУ (щоб Google не бачив білу діру) */}
          <div 
            className={styles.staticBg} 
            style={{ backgroundImage: `url(${bannerSrc})` }} 
          />

          {/* ЦЕГЛИНКИ, ЯКІ ЛЕТЯТЬ ПОВЕРХ ФОНУ */}
          {bricksArray.map((index) => {
            const col = index % COLUMNS;
            const row = Math.floor(index / COLUMNS);

            const initialX = (index * 133 % 1000) - 500; 
            const initialY = (index * 197 % 1000) - 500;

            return (
              <motion.div
                key={index}
                className={styles.brick}
                initial={{ opacity: 0, scale: 1.5, x: initialX, y: initialY }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.8, // Швидша анімація для мобілок (кращий UX)
                  delay: index * 0.008, 
                  ease: "easeOut",
                }}
                style={{
                  width: `${100 / COLUMNS}%`,
                  height: `${100 / ROWS}%`,
                  backgroundImage: `url(${bannerSrc})`,
                  backgroundSize: `${COLUMNS * 100}% ${ROWS * 100}%`,
                  backgroundPosition: `${(col * 100) / (COLUMNS - 1)}% ${(row * 100) / (ROWS - 1)}%`,
                  willChange: "transform, opacity",
                }}
              />
            );
          })}

          <div className={styles.textOverlay}>
            <TextAnimation text={HERO_TEXT} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foto;
