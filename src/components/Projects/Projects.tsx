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
        
        {/* Заголовок із лініями та Преміальним Діамантом */}
        <h2 className={styles.title}>Naše vybrané projekty</h2>
        
        <div className={styles.divider}>
          <span className={styles.line}></span>
          <div className={styles.starWrapper}>
            {/* Мінімалістичний геометричний діамант (Diamond) */}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={styles.starIcon}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 3h12l4 6-10 12L2 9z" />
              <path d="M11 3v18" />
              <path d="M22 9H2" />
              <path d="M18 3l-6 18" />
              <path d="M6 3l6 18" />
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.linkIcon}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
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
