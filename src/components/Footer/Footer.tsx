"use client";

import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          CREATED BY{" "}
          <a 
            href="https://webdevcompass.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
          >
            webdevcompass.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;