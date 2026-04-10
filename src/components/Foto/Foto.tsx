"use client";

import React from "react";
import TextAnimation from "./TextAnimation";
import styles from "./Foto.module.scss";

const HERO_TEXT_1 = "Vaše digitální symfonie.";
const HERO_TEXT_2 = "My dirigujeme – vy si vychutnáváte výsledek.";

const Foto: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          
          {/* Одна статична картинка з пріоритетом завантаження */}
          <img 
            src="/1024.avif" 
            alt="NG Consulting Hero" 
            className={styles.heroImg}
            // fetchPriority допомагає Google зрозуміти, що це головний елемент (LCP)
            fetchPriority="high" 
          />

          <div className={styles.textOverlay}>
            <div className={styles.textContainer}>
              <div className={styles.line1}>
                <TextAnimation text={HERO_TEXT_1} />
              </div>
              <div className={styles.line2}>
                <TextAnimation text={HERO_TEXT_2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foto;
