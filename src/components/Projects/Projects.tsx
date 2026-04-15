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
        
        {/* Заголовок стає динамічним */}
        <h2 className={`${styles.title} reveal`}>Naše vybrané projekty</h2>
        
        <div className={`${styles.divider} reveal`}>
          <span className={styles.line}></span>
          <div className={styles.starWrapper}>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={styles.starIcon}
            >
              <path d="M6 3h12l4 6-10 12L2 9z" />
              <path d="M11 3v18" />
              <path d="M22 9H2" />
            </svg>
          </div>
          <span className={styles.line}></span>
        </div>

        <div className={styles.grid}>
          {visibleProjects.map((project) => (
            /* Кожна картка тепер має клас reveal і буде з'являтися при скролі індивідуально */
            <div key={project.id} className={`${styles.card} reveal`}>
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

        {visibleCount < projectsData.length && (
          /* Кнопка теж з'являється плавно */
          <div className={`${styles.btnWrapper} reveal`}>
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
