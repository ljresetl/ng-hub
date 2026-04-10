"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Maps.module.scss";

const Maps: React.FC = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=..."; // Твій реальний URL
  const directionsUrl = "https://goo.gl/maps/..."; 

  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Зупиняємо стеження після першої появи
        }
      },
      { rootMargin: "200px" } // Почне вантажити за 200px до появи на екрані
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
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - NG Consulting"
            ></iframe>
          ) : (
            <div style={{ width: "100%", height: "100%", background: "#f8f9fa" }} />
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
              <p>Hanychovská 575/33, 460 07 Liberec</p>
            </div>
            
            <div className={styles.item}>
              <span className={styles.label}>Provozní doba:</span>
              <p>Po – Pá: 08:00 – 16:00</p>
              <p>So – Ne: Zavřeno</p>
            </div>

            <div className={styles.item}>
              <span className={styles.label}>Telefon:</span>
              <p>+420 608 133 557</p>
            </div>
          </div>

          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={styles.directionsBtn}>
            Naplánovat trasu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Maps;
