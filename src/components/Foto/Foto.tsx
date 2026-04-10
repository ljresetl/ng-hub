"use client";

import React from "react";
import Image from "next/image";
import styles from "./Foto.module.scss";

// Виносимо текст за межі компонента, щоб він не перестворювався
const TEXT = {
  line1: "Vaše digitální symfonie.",
  line2: "My dirigujeme – vy si vychutnáváte výsledek."
};

const Foto: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.houseCanvas}>
        <Image 
          src="/1024.avif" 
          alt="NG Consulting Hero" 
          fill
          priority
          className={styles.heroImg}
          sizes="(max-width: 768px) 100vw, 1200px"
          quality={70} // Зменшуємо якість для PageSpeed
        />
        
        <div className={styles.textOverlay}>
          <div className={styles.textContainer}>
            <h1 className={styles.line1}>{TEXT.line1}</h1>
            <p className={styles.line2}>{TEXT.line2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foto;
