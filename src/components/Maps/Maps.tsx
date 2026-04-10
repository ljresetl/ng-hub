"use client";

import React from "react";
import styles from "./Maps.module.scss";

const Maps: React.FC = () => {
  // Твої реальні URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.4444!2d15.039!3d50.755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47094ad1!2zSGFueWNob3Zza8OhIDU3NS8zMywgNDYwIDA3IExpYmVyZWM!5e0!3m2!1scs!2scz!4v123456789";
  const directionsUrl = "https://www.google.com/maps/dir//Hanychovská+575%2F33,+460+07+Liberec/";

  return (
    <section className={styles.mapsSection} id="map">
      <div className={styles.container}>
        
        {/* Mapa */}
        <div className={styles.mapWrapper}>
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            // "lazy" вже допомагає, але додамо безпеку та швидкість
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - NG Consulting"
            // Додатковий захист від важких скриптів всередині iframe
            sandbox="allow-scripts allow-same-origin allow-popups"
          ></iframe>
        </div>

        {/* Informační karta */}
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
