"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Foto.module.scss";

const slidesData = [
  { id: 1, desktop: "/1024M.avif", alt: "Strategy" },
  { id: 2, desktop: "/1024G.avif", alt: "Consulting" },
];

const Foto: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    }, 6000); // Кожні 6 секунд
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.banner}>
          {slidesData.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
            >
              <Image
                src={slide.desktop}
                alt={slide.alt}
                fill
                priority={index === 0}
                className={styles.bannerImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foto;