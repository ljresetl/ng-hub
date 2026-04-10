"use client";

import React from "react";
import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import styles from "./Foto.module.scss";

// Шлях до основного банера
const bannerSrc = "/1024.avif"; 

// Оптимізована кількість: 8x6 = 48 вузлів (замість 80). 
// Це значно пришвидшить мобільний рендер без втрати візуального ефекту.
const COLUMNS = 8;
const ROWS = 6;

const HERO_TEXT = "Vaše digitální symfonie. My dirigujeme – vy si vychutnáváte výsledek.";

const Foto: React.FC = () => {
  const bricksArray = Array.from({ length: COLUMNS * ROWS }, (_, i) => i);

  return (
    <section className={styles.hero}>
      {/* Підказка браузеру завантажити картинку негайно (LCP Optimization) */}
      <link rel="preload" href={bannerSrc} as="image" />

      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          
          {/* Статична фонова картинка з низькою прозорістю для миттєвого відображення (LCP Fix) */}
          <div 
            className={styles.preloadBg} 
            style={{ backgroundImage: `url(${bannerSrc})` }} 
          />

          {/* АНІМАЦІЯ ФОТО (цеглинки) */}
          {bricksArray.map((index) => {
            const col = index % COLUMNS;
            const row = Math.floor(index / COLUMNS);

            const initialX = (index * 173 % 1600) - 800; 
            const initialY = (index * 247 % 1600) - 800;
            const initialRotate = (index * 133 % 360);

            return (
              <motion.div
                key={index}
                className={styles.brick}
                initial={{ 
                  x: initialX, 
                  y: initialY, 
                  opacity: 0, 
                  rotate: initialRotate 
                }}
                animate={{ 
                  x: 0, 
                  y: 0, 
                  opacity: 1, 
                  rotate: 0 
                }}
                transition={{
                  duration: 1.2, // Швидша анімація краще для Speed Index
                  delay: index * 0.006, 
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  width: `${100 / COLUMNS}%`,
                  height: `${100 / ROWS}%`,
                  backgroundImage: `url(${bannerSrc})`,
                  backgroundSize: `${COLUMNS * 100}% ${ROWS * 100}%`,
                  backgroundPosition: `${(col * 100) / (COLUMNS - 1)}% ${(row * 100) / (ROWS - 1)}%`,
                  willChange: "transform, opacity", // Змушує відеокарту готуватися заздалегідь
                }}
              />
            );
          })}

          {/* НАКЛАДАННЯ ТЕКСТУ ПОВЕРХ ФОТО */}
          <div className={styles.textOverlay}>
            <TextAnimation text={HERO_TEXT} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foto;
