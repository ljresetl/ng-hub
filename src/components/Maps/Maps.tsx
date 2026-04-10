"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Потрібно встановити: npm install react-intersection-observer
import styles from "./Maps.module.scss";

const Maps: React.FC = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.4444!2d15.039!3d50.755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47094ad1!2zSGFueWNob3Zza8OhIDU3NS8zMywgNDYwIDA3IExpYmVyZWM!5e0!3m2!1scs!2scz!4v123456789";
  const directionsUrl = "https://www.google.com/maps/dir//Hanychovská+575%2F33,+460+07+Liberec/";

  // Використовуємо хук для відстеження появи секції на екрані
  const { ref, inView } = useInView({
    triggerOnce: true, // Завантажити тільки один раз
    rootMargin: "200px 0px", // Почати завантаження за 200px до того, як користувач доскролить
  });

  return (
    <section className={styles.mapsSection} id="map" ref={ref}>
      <div className={styles.container}>
        
        <div className={styles.mapWrapper}>
          {/* Карта з'явиться в DOM тільки тоді, коли inView стане true */}
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
            <div style={{ width: "100%", height: "100%", background: "#f0f0f0" }} /> 
            // Порожній блок-заглушка, поки карта вантажиться
          )}
        </div>

        <div className={styles.infoCard}>
          {/* Твій інший код (бренд, деталі, кнопка) залишається без змін */}
          <div className={styles.brand}>
            <h3>NG Consulting</h3>
            <p>Váš partner ve světě digitálu</p>
          </div>
          {/* ... */}
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={styles.directionsBtn}>
            Naplánovat trasu
          </a>
        </div>

      </div>
    </section>
  );
};

export default Maps;
