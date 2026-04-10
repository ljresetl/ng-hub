"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextAnimation from "./TextAnimation";
import styles from "./Foto.module.scss";

// Твої два фото
const images = ["/1024.avif", "/1024G.avif"]; 

const COLUMNS = 10;
const ROWS = 8;
const HERO_TEXT = "Vaše digitální symfonie. My dirigujeme – vy si vychutnáváte výsledek.";

const Foto: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isInitial, setIsInitial] = useState(true); 
  const bricksArray = Array.from({ length: COLUMNS * ROWS }, (_, i) => i);

  useEffect(() => {
    // 1. Перша затримка для Google: 4 секунди перше фото стоїть нерухомо
    const initialTimer = setTimeout(() => {
      setIsInitial(false);
      setIndex(1);
    }, 4000);

    // 2. Цикл зміни фото
    const interval = setInterval(() => {
      // Спочатку "скидаємо" фото (ефект вильоту)
      // AnimatePresence з mode="wait" автоматично почекає завершення exit анімації
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Загальний цикл

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          
          {/* mode="wait" забезпечує, що старе фото повністю зникне, 
              перш ніж почне з'являтися нове. Це створює момент "порожнечі" */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={index} 
              className={styles.bricksWrapper}
              // Додаємо невелику затримку появи самого контейнера (0.5 сек), 
              // щоб між розльотом і зльотом була пауза
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }} 
            >
              {bricksArray.map((i) => {
                const col = i % COLUMNS;
                const row = Math.floor(i / COLUMNS);
                
                const initialX = (i * 173 % 2000) - 1000; 
                const initialY = (i * 247 % 2000) - 1000;
                const initialRotate = (i * 133 % 360);

                return (
                  <motion.div
                    key={i}
                    className={styles.brick}
                    initial={isInitial ? { opacity: 1, x: 0, y: 0, rotate: 0 } : { 
                      x: initialX, 
                      y: initialY, 
                      opacity: 0,
                      rotate: initialRotate
                    }}
                    animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                    exit={{ 
                      x: initialX * 0.5, 
                      y: initialY * 0.5, 
                      opacity: 0,
                      rotate: initialRotate / 2
                    }}
                    transition={{
                      duration: 1.2, // Трохи швидше складання
                      delay: i * 0.005,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      width: `${100 / COLUMNS}%`,
                      height: `${100 / ROWS}%`,
                      backgroundImage: `url(${images[index]})`,
                      backgroundSize: `${COLUMNS * 100}% ${ROWS * 100}%`,
                      backgroundPosition: `${(col * 100) / (COLUMNS - 1)}% ${(row * 100) / (ROWS - 1)}%`,
                    }}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>

          <div className={styles.textOverlay}>
            <TextAnimation text={HERO_TEXT} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foto;
