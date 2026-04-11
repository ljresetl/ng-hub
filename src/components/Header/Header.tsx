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
    
    // Очищення при розмонтуванні компонента
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Використовуємо replace для логотипу, щоб повернутися вгору без дублювання */}
          <Link href="/#" className={styles.logo} onClick={closeMenu} replace>
            NG <span>Consulting</span>
          </Link>

          <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
            {/* Властивість replace замінює поточний хеш у URL замість додавання нового */}
            <Link href="#projects" onClick={closeMenu} replace>PROJEKTY</Link>
            <Link href="#references" onClick={closeMenu} replace>REFERENCE</Link>
            <Link href="#map" onClick={closeMenu} replace>KDE NÁS NAJDETE</Link>
            <Link href="#kontakt" onClick={closeMenu} replace>KONTAKT</Link>
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
