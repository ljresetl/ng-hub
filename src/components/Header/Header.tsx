"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Блокуємо скрол сторінки, коли меню відкрите
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            NG <span>Consulting</span>
          </Link>

          <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
            <Link href="#projects" onClick={closeMenu}>PROJEKTY</Link>
            <Link href="#references" onClick={closeMenu}>REFERENCE</Link>
            <Link href="#map" onClick={closeMenu}>KDE NÁS NAJDETE</Link>
            <Link href="#kontakt" onClick={closeMenu}>KONTAKT</Link>
          </nav>

          <div className={styles.actions}>
            <button 
              className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`} 
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Оверлей тепер рендериться ТІЛЬКИ коли меню відкрите */}
      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </>
  );
}
