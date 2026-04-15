"use client";

import React from "react";
import Image from "next/image";
import styles from "./Foto.module.scss";

const Foto: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Головний контейнер просто з'являється */}
        <div className={styles.houseCanvas}>
          
          <Image 
            src="/1775925937764.avif"
            alt="NG Consulting - Digitální symfonie"
            fill
            priority 
            // @ts-ignore
            fetchPriority="high" 
            quality={85}
            sizes="100vw" 
            className={styles.bgImage}
          />

          <div className={styles.textOverlay}>
            <div className={styles.textContainer}>
              {/* Додаємо клас entrance для анімації при завантаженні */}
              <h1 className={`${styles.title} ${styles.entrance}`}>
                Vaše digitální symfonie.
              </h1>
              <p className={`${styles.subtitle} ${styles.entrance}`}>
                My dirigujeme – vy si vychutnáváte výsledek.
              </p>
              <div className={`${styles.ctaWrapper} ${styles.entrance}`}>
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
