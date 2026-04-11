"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* 1. Сам хедер */}
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

      {/* 2. Оверлей винесено ПЕРЕД закриваючим фрагментом, щоб він був на весь екран */}
      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </>
  );
}
