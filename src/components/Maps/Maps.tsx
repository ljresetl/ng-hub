"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Maps.module.scss";

const Maps: React.FC = () => {
  // Твоя адреса
  const address = "Hanychovská 575/33, 460 07 Liberec, Czechia";
  const encodedAddress = encodeURIComponent(address);

  // Формат карти, який працює БЕЗ ключів і точно показує адресу
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=ЗАМІНИ_НА_КЛЮЧ_АБО_ВИКОРИСТОВУЙ_НИЖЧЕ`;
  
  // Якщо ключа немає, використовуємо цей стабільний формат:
  const noKeyMapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Вбудований браузерний спостерігач (заміна бібліотеці)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
            <div style={{ 
              width: "100%", height: "100%", background: "#f0f0f0",
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "12px", color: "#666" 
            }}>
              Načítání mapy...
            </div>
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
              <p>So – Ne: Zavřeno</p>
            </div>

            <div className={styles.item}>
              <span className={styles.label}>Telefon:</span>
              <p>+420 608 133 557</p>
            </div>
          </div>

          <a 
            href={directionsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.directionsBtn}
          >
            Naplánovat trasu
          </a>
        </div>

      </div>
    </section>
  );
};

export default Maps;
