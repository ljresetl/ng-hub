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
            href="https://ngstranky.cz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
          >
            NGSTRÁNKY.CZ
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;