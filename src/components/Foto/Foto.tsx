"use client";

import React from "react";
import styles from "./Foto.module.scss";

// Тексти виносимо в константи, щоб код був чистішим
const HERO_TITLE = "Vaše digitální symfonie.";
const HERO_SUBTITLE = "My dirigujeme – vy si vychutnáváte výsledek.";
const CTA_BUTTON_TEXT = "Způsobit revoluci"; // "Спричинити революцію"
const CTA_BUTTON_LINK = "#kontakt"; // Зазвичай веде до форми контакту

const Foto: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          
          {/* ОБОВ'ЯЗКОВО: Переконайся, що в твоїй темі */}
          {/* Header та Footer рендеряться в DOM для PageSpeed */}
          
          <div className={styles.textOverlay}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>{HERO_TITLE}</h1>
              <p className={styles.subtitle}>{HERO_SUBTITLE}</p>
              
              {/* НОВА КНОПКА ЗАКЛИКУ ДО ДІЇ */}
              <div className={styles.ctaWrapper}>
                <a href={CTA_BUTTON_LINK} className={styles.ctaButton}>
                  {CTA_BUTTON_TEXT}
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Foto;
