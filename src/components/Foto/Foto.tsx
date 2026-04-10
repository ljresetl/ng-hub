"use client";

import React from "react";
import styles from "./Foto.module.scss";

const HERO_TEXT_1 = "Vaše digitální symfonie.";
const HERO_TEXT_2 = "My dirigujeme – vy si vychutnáváte výsledek.";

const Foto: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          
          {/* ОБОВ'ЯЗКОВО: Додаємо Header та Footer в DOM, щоб PageSpeed їх бачив */}
          {/* ... твій Header ... */}
          
          <div className={styles.bricksWrapper}>
            {/* Тільки 24 кубики — "золота середина" для PageSpeed */}
            {[...Array(24)].map((_, i) => (
              <div key={i} className={styles.brick} />
            ))}
          </div>

          <div className={styles.textOverlay}>
            <div className={styles.textContainer}>
              {/* Анімацію появи робимо через легкий CSS */}
              <h1 className={`${styles.line1} ${styles.animateFadeIn}`}>
                {HERO_TEXT_1}
              </h1>
              <p className={`${styles.line2} ${styles.animateFadeInDelayed}`}>
                {HERO_TEXT_2}
              </p>
            </div>
          </div>
          
          {/* ... твій Footer ... */}
        </div>
      </div>
    </section>
  );
};

export default Foto;
