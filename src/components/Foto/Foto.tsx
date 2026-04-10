"use client";

import React from "react";
import Image from "next/image";
import styles from "./Foto.module.scss";

const Foto: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          
          {/* МОБІЛЬНЕ ФОТО: пріоритет №1 */}
          <div className={styles.mobileOnly}>
            <Image 
              src="/1024 (3).avif" // Переконайся, що назва в public 1 в 1 така сама
              alt="NG Consulting Mobile"
              fill
              priority // Змушує браузер качати фото негайно
              quality={85}
              loading="eager"
              sizes="(max-width: 767px) 100vw, 1px"
              className={styles.bgImage}
            />
          </div>

          {/* ДЕСКТОПНЕ ФОТО */}
          <div className={styles.desktopOnly}>
            <Image 
              src="/1024.avif" 
              alt="NG Consulting Desktop"
              fill
              priority
              quality={90}
              sizes="(min-width: 768px) 100vw, 1px"
              className={styles.bgImage}
            />
          </div>

          <div className={styles.textOverlay}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Vaše digitální symfonie.</h1>
              <p className={styles.subtitle}>My dirigujeme – vy si vychutnáváte výsledek.</p>
              <div className={styles.ctaWrapper}>
                <a href="#kontakt" className={styles.ctaButton}>
                  Způsobit revoluci
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
