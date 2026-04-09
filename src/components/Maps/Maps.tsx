"use client";

import React from "react";
import styles from "./Maps.module.scss";

const Maps: React.FC = () => {
  // Використовуємо пряме посилання, яке працює без помилок
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.5363435161433!2d15.04416557685655!3d50.7470481659223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470934258e91090f%3A0xb9c71ff7a82f1b3e!2sngstr%C3%A1nky.cz!5e0!3m2!1suk!2scz!4v1712698000000!5m2!1suk!2scz";
  
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=ngstránky.cz&destination_place_id=ChIJDwmRjiU0CUcRPhsvqPcfx7k";

  return (
    <section className={styles.mapsSection} id="map">
      <div className={styles.container}>
        {/* Карта на всю ширину */}
        <div className={styles.mapContainer}>
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

        {/* Контейнер для позиціонування картки */}
        <div className="container">
          <div className={styles.infoCardWrapper}>
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
        </div>
      </div>
    </section>
  );
};

export default Maps;