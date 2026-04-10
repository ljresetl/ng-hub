"use client";

import React from "react";
import styles from "./Maps.module.scss";

const Maps: React.FC = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.456385499252!2d15.0346387!3d50.7485368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709359670f5e7d5%3A0x6a2c3a51f893e32b!2sHanychovsk%C3%A1%20575%2F33%2C%20460%2007%20Liberec%207!5e0!3m2!1suk!2scz!4v1710000000000!5m2!1suk!2scz";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Hanychovská+575/33,+460+07+Liberec";

  return (
    <section className={styles.mapsSection} id="map">
      <div className={styles.container}>
        
        {/* Блок з картою */}
        <div className={styles.mapWrapper}>
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ngstránky.cz location"
          ></iframe>
        </div>

        {/* Блок з інформацією */}
        <div className={styles.infoCard}>
          <div className={styles.brand}>
            <h3>ngstránky.cz</h3>
            <p>Ваш партнер у світі диджитал</p>
          </div>
          
          <div className={styles.details}>
            <div className={styles.item}>
              <span className={styles.label}>Адреса:</span>
              <p>Hanychovská 575/33, 460 07 Liberec</p>
            </div>
            
            <div className={styles.item}>
              <span className={styles.label}>Години роботи:</span>
              <p>Пн – Пт: 08:00 – 16:00</p>
              <p>Сб – Нд: Зачинено</p>
            </div>

            <div className={styles.item}>
              <span className={styles.label}>Телефон:</span>
              <p>+420 608 133 557</p>
            </div>
          </div>

          <a 
            href={directionsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.directionsBtn}
          >
            Побудувати маршрут
          </a>
        </div>

      </div>
    </section>
  );
};

export default Maps;