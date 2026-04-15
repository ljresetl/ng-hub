"use client";

import React from "react";
import Image from "next/image";
import styles from "./Foto.module.scss";

const Foto: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Додаємо reveal до всього контейнера, щоб він плавно з'явився */}
        <div className={`${styles.houseCanvas} reveal`}>
          
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
              {/* Додаємо reveal до заголовка та підзаголовка */}
              <h1 className={`${styles.title} reveal`}>
                Vaše digitální symfonie.
              </h1>
              <p className={`${styles.subtitle} reveal`}>
                My dirigujeme – vy si vychutnáváte výsledek.
              </p>
              <div className={`${styles.ctaWrapper} reveal`}>
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
