"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import styles from "./Foto.module.scss";

const bannerSrc = "/1024.avif"; 

const COLUMNS = 10;
const ROWS = 8;

const HERO_TEXT = "Vaše digitální symfonie. My dirigujeme – vy si vychutnáváte výsledek.";

const Foto: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const bricksArray = Array.from({ length: COLUMNS * ROWS }, (_, i) => i);

  useEffect(() => {
    // Визначаємо, чи це мобільний пристрій
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          {bricksArray.map((index) => {
            const col = index % COLUMNS;
            const row = Math.floor(index / COLUMNS);

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
                  // На мобільних робимо анімацію довшою (2.5с замість 1.5с)
                  duration: isMobile ? 2.5 : 1.5,
                  // На мобільних збільшуємо інтервал появи цеглинок (0.01с замість 0.005с)
                  delay: index * (isMobile ? 0.01 : 0.005),
                  ease: [0.22, 1, 0.36, 1],
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
