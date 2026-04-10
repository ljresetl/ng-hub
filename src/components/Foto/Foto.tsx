"use client";

import React from "react";
import Image from "next/image";
import styles from "./Foto.module.scss";

const Foto: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          
          {/* МОБІЛЬНЕ ФОТО: завантажується тільки на малих екранах */}
          <div className={styles.mobileImg}>
            <Image 
              src="/400M.avif" 
              alt="NG Consulting Mobile" 
              fill
              priority
              quality={80}
              sizes="(max-width: 767px) 100vw, 1px"
            />
          </div>

          {/* ДЕСКТОПНЕ ФОТО: завантажується тільки на великих екранах */}
          <div className={styles.desktopImg}>
            <Image 
              src="/1024.avif" 
              alt="NG Consulting Desktop" 
              fill
              priority
              quality={85}
              sizes="(min-width: 768px) 100vw, 1px"
            />
          </div>

          <div className={styles.textOverlay}>
            <div className={styles.textContainer}>
              <h1 className={styles.line1}>Vaše digitální symfonie.</h1>
              <p className={styles.line2}>My dirigujeme – vy si vychutnáváte výsledek.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foto;
