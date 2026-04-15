"use client";

import React from "react";
import styles from "./References.module.scss";
import referencesData from "@/data/references.json";

const MarqueeRow = ({ 
  items, 
  direction 
}: { 
  items: typeof referencesData; 
  direction: 'left' | 'right' 
}) => (
  <div className={`${styles.marquee} ${direction === 'right' ? styles.reverse : ''}`}>
    <div className={styles.marqueeGroup}>
      {[...items, ...items, ...items].map((ref, index) => (
        <div className={styles.logoSlide} key={`${ref.id}-${index}`}>
          <a 
            href={ref.webUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.logoCard}
          >
            <div className={styles.brandPlaceholder}>
              <span className={styles.brandName}>{ref.name}</span>
              <div className={styles.brandDot}></div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
);

const References: React.FC = () => {
  const firstRow = referencesData.slice(0, Math.ceil(referencesData.length / 2));
  const secondRow = referencesData.slice(Math.ceil(referencesData.length / 2));

  return (
    /* Додаємо reveal на всю секцію, щоб вона плавно з'явилася при скролі */
    <section className={`${styles.references} reveal`} id="references">
      <div className={styles.container}>
        <header className={styles.header}>
          {/* Окремі класи reveal для заголовка та лінії, щоб вони випливали красиво */}
          <h2 className="reveal">Vybrané reference</h2>
          <div className={`${styles.line} reveal`}></div>
        </header>

        {/* Додаємо reveal на контейнер з логотипами */}
        <div className={`${styles.marqueeContainer} reveal`}>
          <MarqueeRow items={firstRow} direction="left" />
          <MarqueeRow items={secondRow} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default References;
