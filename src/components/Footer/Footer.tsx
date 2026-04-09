"use client";

import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          {/* Ліва частина */}
          <div className={styles.leftSide}>
            <p className={styles.text}>
              CREATED BY{" "}
              <a href="https://ngstranky.cz" target="_blank" rel="noopener" className={styles.link}>
                NGSTRÁNKY.CZ
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;