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
        
        {/* Заголовок із лініями та Музичним символом */}
        <h2 className={styles.title}>Naše vybrané projekty</h2>
        <div className={styles.divider}>
          <span className={styles.line}></span>
          <div className={styles.starWrapper}>
            {/* Скрипковий ключ — символ диригента та симфонії коду */}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={styles.starIcon}
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
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
                      {s.iconSvg && (
                        <div 
                          className={styles.serviceIcon} 
                          dangerouslySetInnerHTML={{ __html: s.iconSvg }} 
                        />
                      )}
                      <span className={styles.tag}>{s.title}</span>
                    </div>
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
