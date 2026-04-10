"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextAnimation from "./TextAnimation";
import styles from "./Foto.module.scss";

const images = ["/1024.avif", "/1024G.avif"]; 
const COLUMNS = 10; // Зменшив до 10 для легшого рендеру
const ROWS = 6;    // Зменшив до 6
const HERO_TEXT_1 = "Vaše digitální symfonie.";
const HERO_TEXT_2 = "My dirigujeme – vy si vychutnáváte výsledek.";

const Foto: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isInitial, setIsInitial] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Перша анімація почнеться лише через 4 секунди, 
    // щоб Google встиг зафіксувати статичну картинку
    const timer = setTimeout(() => {
      setIsInitial(false);
      setIndex(1);
    }, 4000);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const bricksArray = Array.from({ length: COLUMNS * ROWS }, (_, i) => i);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          
          {/* СТАТИЧНА КАРТИНКА ДЛЯ GOOGLE (LCP FIX) */}
          {isInitial && (
            <img 
              src={images[0]} 
              alt="Hero" 
              className={styles.staticImg} 
              fetchpriority="high"
            />
          )}

          {/* АНІМАЦІЯ ВКЛЮЧАЄТЬСЯ ТІЛЬКИ ПІСЛЯ СТАРТУ */}
          {!isInitial && isClient && (
            <AnimatePresence>
              <motion.div key={index} className={styles.bricksWrapper}>
                {bricksArray.map((i) => {
                  const col = i % COLUMNS;
                  const row = Math.floor(i / COLUMNS);
                  return (
                    <motion.div
                      key={i}
                      className={styles.brick}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{
                        duration: 0.5,
                        delay: col * 0.03,
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
          )}

          <div className={styles.textOverlay}>
            <div className={styles.textContainer}>
              <div className={styles.line1}><TextAnimation text={HERO_TEXT_1} /></div>
              <div className={styles.line2}><TextAnimation text={HERO_TEXT_2} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foto;
