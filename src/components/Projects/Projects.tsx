"use client";

import React, { useState } from "react";
import styles from "./Projects.module.scss";
import projectsData from "../../data/projects.json";

const Projects: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => setVisibleCount((prev) => prev + 3);
  const visibleProjects = projectsData.slice(0, visibleCount);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        
        {/* Заголовок із лініями та зірочкою */}
        <h2 className={styles.title}>Naše vybrané projekty</h2>
        <div className={styles.divider}>
          <span className={styles.line}></span>
          <div className={styles.starWrapper}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.starIcon}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <span className={styles.line}></span>
        </div>

        {/* Сітка карток */}
        <div className={styles.grid}>
          {visibleProjects.map((project) => (
            <div key={project.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardSubtitle}>{project.subtitle}</p>
              
              <div className={styles.servicesList}>
                {project.services.map((s) => (
                  <div key={s.id} className={styles.serviceItem}>
                    <div className={styles.serviceHeader}>
                      {/* Відображення SVG іконки з JSON */}
                      {s.iconSvg && (
                        <div 
                          className={styles.serviceIcon} 
                          dangerouslySetInnerHTML={{ __html: s.iconSvg }} 
                        />
                      )}
                      <span className={styles.tag}>{s.title}</span>
                    </div>
                    {/* Якщо в JSON є features, можна додати і їх */}
                    {s.features && (
                      <ul className={styles.features}>
                        {s.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <a 
                href={`https://${project.title}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                Prozkoumat projekt
              </a>
            </div>
          ))}
        </div>

        {/* Кнопка "Zobrazit další" */}
        {visibleCount < projectsData.length && (
          <div className={styles.btnWrapper}>
            <button className={styles.loadMore} onClick={showMore}>
              Zobrazit další
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;