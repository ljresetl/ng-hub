"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          NG <span>Consulting</span>
        </Link>

        {/* Десктопна навігація */}
        <nav className={styles.desktopNav}>
          <Link href="#projects" className={styles.link}>PROJEKTY</Link>
          <Link href="#references" className={styles.link}>REFERENCE</Link>
          <Link href="#map" className={styles.link}>KDE NÁS NAJDETE</Link>
          <Link href="#kontakt" className={styles.link}>KONTAKT</Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.searchBtn} aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button 
            className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`} 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>

        {/* Мобільне меню */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.menuVisible : ''}`}>
          <nav className={styles.mobileNav}>
            <Link href="#projects" className={styles.link} onClick={closeMenu}>PROJEKTY</Link>
            <Link href="#references" className={styles.link} onClick={closeMenu}>REFERENCE</Link>
            <Link href="#map" className={styles.link} onClick={closeMenu}>KDE NÁS NAJDETE</Link>
            <Link href="#kontakt" className={styles.link} onClick={closeMenu}>KONTAKT</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}