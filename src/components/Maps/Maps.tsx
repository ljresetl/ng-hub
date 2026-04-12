"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Maps.module.scss";

const Maps: React.FC = () => {
  const address = "Hanychovská 575/33, 460 07 Liberec, Czechia";
  const encodedAddress = encodeURIComponent(address);
  
  const noKeyMapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.mapsSection} id="map" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.mapWrapper}>
          {inView ? (
            <iframe
              src={noKeyMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="NG Consulting Office"
            ></iframe>
          ) : (
            <div className={styles.loader}>Načítání mapy...</div>
          )}
        </div>

        <div className={styles.infoCard}>
          <div className={styles.brand}>
            <h3>NG Consulting</h3>
            <p>Váš partner ve světě digitálu</p>
          </div>
          
          <div className={styles.details}>
            <div className={styles.item}>
              <span className={styles.label}>Adresa:</span>
              <p>{address}</p>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>Provozní doba:</span>
              <p>Po – Pá: 08:00 – 16:00</p>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>Telefon:</span>
              <p>+420 608 133 557</p>
            </div>
          </div>

          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={styles.directionsBtn}>
            Naplánovat trasu
          </a>

          {/* СІТКА СОЦІАЛЬНИХ МЕРЕЖ */}
          <div className={styles.socialGrid}>
            <a href="#" className={`${styles.socialLink} ${styles.ig}`} aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className={`${styles.socialLink} ${styles.li}`} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className={`${styles.socialLink} ${styles.fb}`} aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className={`${styles.socialLink} ${styles.tw}`} aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className={`${styles.socialLink} ${styles.wa}`} aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="#" className={`${styles.socialLink} ${styles.tk}`} aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.417 6.417 0 0 1-1.87-1.43v6.14c0 1.27-.24 2.53-.74 3.71-.46 1.08-1.22 2.04-2.18 2.73-1.02.73-2.26 1.17-3.51 1.25-1.27.08-2.58-.12-3.76-.66-1.12-.51-2.1-1.36-2.73-2.39-.68-1.12-1.03-2.45-1.03-3.75 0-1.28.33-2.58.98-3.71.61-1.06 1.54-1.96 2.65-2.49 1.14-.56 2.45-.8 3.71-.74V7.52c-1.16-.06-2.35.15-3.41.66-1.01.48-1.86 1.26-2.41 2.22-.53.93-.81 2-.81 3.07 0 1.06.26 2.14.75 3.1.47.93 1.21 1.71 2.1 2.22 1.13.65 2.48.88 3.77.72 1.11-.14 2.16-.62 3-1.37.83-.75 1.41-1.74 1.65-2.82.16-.7.22-1.42.22-2.14V.02z"/></svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Maps;
