'use client';

import { useInView } from 'react-intersection-observer';
import styles from './Maps.module.scss';

const Maps = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  [span_2](start_span)// Точна адреса з твого листування[span_2](end_span)
  const address = "Hanychovská 575/33, 460 07 Liberec";
  const encodedAddress = encodeURIComponent(address);
  
  // Посилання для кнопки "Najít cestu" (відкриває маршрут)
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  return (
    <section className={styles.mapsSection} ref={ref}>
      <div className={styles.container}>
        <div className={styles.mapWrapper}>
          {inView ? (
            <iframe
              title="NG Consulting Office"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              // Надійний формат iframe без потреби в API ключі
              src={`https://www.google.com/maps/embed/v1/place?key=ТВІЙ_API_KEY&q=${encodedAddress}`}
              /* ЯКЩО В ТЕБЕ НЕМАЄ API КЛЮЧА, використовуй цей src замість верхнього:
                 src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              */
            ></iframe>
          ) : (
            <div className={styles.placeholder}>Načítání mapy...</div>
          )}
        </div>

        <div className={styles.info}>
          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.routeButton}
          >
            Najít cestu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Maps;
