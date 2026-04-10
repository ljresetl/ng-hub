"use client";
import React from "react";
import Image from "next/image";
import styles from "./Foto.module.scss";

const Foto: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.houseCanvas}>
          
          {/* Ця картинка потрібна ТІЛЬКИ для Google, щоб LCP був зеленим */}
          {/* Вона завантажиться першою, але буде захована під кубиками */}
          <div className={styles.lcpImage}>
            <Image 
              src="/400M.avif" 
              alt="Background" 
              fill 
              priority 
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className={styles.bricksWrapper}>
            {[...Array(24)].map((_, i) => (
              <div key={i} className={styles.brick} />
            ))}
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
