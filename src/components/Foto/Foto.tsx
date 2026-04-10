"use client";

import React from "react";
import Image from "next/image";
import styles from "./Foto.module.scss";

const Foto: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.houseCanvas}>
        {/* Мобільна версія (показується на екранах до 768px) */}
        <div className={styles.mobileOnly}>
          <Image 
            src="/400M.avif" 
            alt="NG Consulting Mobile" 
            fill
            priority
            quality={65}
            sizes="100vw"
          />
        </div>

        {/* Десктоп версія (показується на екранах від 768px) */}
        <div className={styles.desktopOnly}>
          <Image 
            src="/1024.avif" 
            alt="NG Consulting Desktop" 
            fill
            priority
            quality={75}
            sizes="100vw"
          />
        </div>
        
        <div className={styles.textOverlay}>
          <div className={styles.textContainer}>
            <h1 className={styles.line1}>Vaše digitální symfonie.</h1>
            <p className={styles.line2}>My dirigujeme – vy si vychutnáváte výsledek.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foto;
