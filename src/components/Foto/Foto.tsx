"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Foto.module.scss";

const HERO_TEXT_1 = "Vaše digitální symfonie.";
const HERO_TEXT_2 = "My dirigujeme – vy si vychutnáváte výsledek.";

// 10x6 = 60 кубиків (оптимально для мобільних)
const COLUMNS = 10; 
const ROWS = 6;

const Foto: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const bricksArray = Array.from({ length: COLUMNS * ROWS }, (_, i) => i);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          
          <AnimatePresence>
            {isClient && (
              <div className={styles.bricksWrapper}>
                {bricksArray.map((i) => {
                  const col = i % COLUMNS;
                  const row = Math.floor(i / COLUMNS);
                  return (
                    <motion.div
                      key={i}
                      className={styles.brick}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: col * 0.06 + row * 0.04,
                        ease: "easeOut",
                      }}
                      style={{
                        width: `${100 / COLUMNS}%`,
                        height: `${100 / ROWS}%`,
                        // Використовуємо CSS змінні для автоматичної зміни фото
                        backgroundImage: `var(--hero-bg)`,
                        backgroundSize: `${COLUMNS * 100}% ${ROWS * 100}%`,
                        backgroundPosition: `${(col * 100) / (COLUMNS - 1)}% ${(row * 100) / (ROWS - 1)}%`,
                      }}
                    />
                  );
                })}
              </div>
            )}
          </AnimatePresence>

          <div className={styles.textOverlay}>
            <div className={styles.textContainer}>
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className={styles.line1}
              >
                {HERO_TEXT_1}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className={styles.line2}
              >
                {HERO_TEXT_2}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foto;
