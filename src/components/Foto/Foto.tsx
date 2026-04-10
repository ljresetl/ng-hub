"use client";

import React from "react";
import Image from "next/image";
import styles from "./Foto.module.scss";

// Використовуємо одну картинку
const bannerSrc = "/1024M.avif"; 

const Foto: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <Image
            src={bannerSrc}
            alt="Strategy and Consulting"
            fill // Заповнює батьківський блок .banner
            priority // Завантажується першочергово
            className={styles.bannerImage}
            sizes="(max-width: 768px) 100vw, 1200px" // Допомагає Next.js оптимізувати розмір
          />
        </div>
      </div>
    </section>
  );
};

export default Foto;