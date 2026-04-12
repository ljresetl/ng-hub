"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Maps.module.scss";

const Maps: React.FC = () => {
  const address = "Hanychovská 575/33, 460 07 Liberec, Czechia";
  const encodedAddress = encodeURIComponent(address);
  
  // Виправлені посилання (прибрав помилкові домени з твого прикладу)
  const noKeyMapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  const [inView, setInView] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
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
              referrerPolicy="no-referrer-when-downgrade"
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

          <div className={styles.actionsRow}>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={styles.directionsBtn}>
              Naplánovat trasu
            </a>

            {/* КНОПКА-КВІТКА СОЦМЕРЕЖ */}
            <div 
              className={`${styles.socialWrapper} ${isSocialOpen ? styles.active : ""}`}
              onMouseEnter={() => setIsSocialOpen(true)}
              onMouseLeave={() => setIsSocialOpen(false)}
              onClick={() => setIsSocialOpen(!isSocialOpen)}
            >
              <button className={styles.mainSocialBtn} aria-label="Social networks">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                   <circle cx="12" cy="12" r="5" />
                   <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
              </button>

              <div className={styles.socialCircle}>
                <a href="https://instagram.com" className={styles.socialIcon} target="_blank" rel="noreferrer">IG</a>
                <a href="https://linkedin.com" className={styles.socialIcon} target="_blank" rel="noreferrer">IN</a>
                <a href="https://facebook.com" className={styles.socialIcon} target="_blank" rel="noreferrer">FB</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;
