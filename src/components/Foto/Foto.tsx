"use client";

import React from "react";
import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import styles from "./Foto.module.scss";

// Переконайся, що файл за цим шляхом існує в папці public
const bannerSrc = "/1024.avif"; 

const COLUMNS = 10;
const ROWS = 8;

const HERO_TEXT = "Vaše digitální symfonie. My dirigujeme – vy si vychutnáváte výsledek.";

const Foto: React.FC = () => {
  // Створюємо стабільний масив індексів
  const bricksArray = Array.from({ length: COLUMNS * ROWS }, (_, i) => i);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          {/* АНІМАЦІЯ ФОТО (цеглинки) */}
          {bricksArray.map((index) => {
            const col = index % COLUMNS;
            const row = Math.floor(index / COLUMNS);

            // Формули для початкового розкиду (стабільні псевдо-рандомні значення)
            const initialX = (index * 173 % 2000) - 1000; 
            const initialY = (index * 247 % 2000) - 1000;
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
                  duration: 1.5,
                  delay: index * 0.005, // Поступове збирання
                  ease: [0.22, 1, 0.36, 1], // Плавний фініш
                }}
                style={{
                  width: `${100 / COLUMNS}%`,
                  height: `${100 / ROWS}%`,
                  backgroundImage: `url(${bannerSrc})`,
                  backgroundSize: `${COLUMNS * 100}% ${ROWS * 100}%`,
                  backgroundPosition: `${(col * 100) / (COLUMNS - 1)}% ${(row * 100) / (ROWS - 1)}%`,
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