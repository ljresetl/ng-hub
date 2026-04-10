"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextAnimation from "./TextAnimation";
import styles from "./Foto.module.scss";

const images = ["/1024.avif", "/1024G.avif"]; 
const COLUMNS = 12; 
const ROWS = 8;

const Foto: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isInitial, setIsInitial] = useState(true); 
  const [canAnimate, setCanAnimate] = useState(false); // Новий стейт для стабілізації

  const bricksArray = Array.from({ length: COLUMNS * ROWS }, (_, i) => i);

  useEffect(() => {
    // 1. Даємо браузеру 100мс просто відмалювати HTML, перш ніж JS почне "думати"
    const stabilityTimer = setTimeout(() => {
      setCanAnimate(true);
    }, 100);

    // 2. Перша заміна фото через 3 секунди
    const initialTimer = setTimeout(() => {
      setIsInitial(false);
      setIndex(1);
    }, 3000);

    // 3. Цикл
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      clearTimeout(stabilityTimer);
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  // Якщо ще не можна анімувати, рендеримо порожній контейнер (або нічого)
  // Це зрізає TBT (Total Blocking Time) до нуля при старті.
  if (!canAnimate) return <section className={styles.hero} />;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          <AnimatePresence>
            <motion.div key={index} className={styles.bricksWrapper}>
              {bricksArray.map((i) => {
                const col = i % COLUMNS;
                const row = Math.floor(i / COLUMNS);
                return (
                  <motion.div
                    key={i}
                    className={styles.brick}
                    // Миттєвий показ при старті (LCP fix)
                    initial={isInitial ? { opacity: 1, x: 0 } : { x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: col * 0.06, // Швидка хвиля
                      ease: "easeOut",
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
            <div className={styles.textContainer}>
              <div className={styles.line1}>
                <TextAnimation text="Vaše digitální symfonie." />
              </div>
              <div className={styles.line2}>
                <TextAnimation text="My dirigujeme – vy si vychutnáváte výsledek." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foto;
