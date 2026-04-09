"use client";

import React, { useState } from "react";
import { Laptop, TrendingUp, Mail, Users, Rocket, LucideProps, ChevronDown, ArrowRight } from "lucide-react";
import styles from "./Projects.module.scss";
import projectsData from "../../data/projects.json";

const IconMap: Record<string, React.ComponentType<LucideProps>> = {
  Laptop,
  TrendingUp,
  Mail,
  Users,
  Rocket
};

const Projects: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const showMoreProjects = () => setVisibleCount((prev) => prev + 3);

  const visibleProjects = projectsData.slice(0, visibleCount);
  const hasMore = visibleCount < projectsData.length;

  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <header className={styles.sectionHeader}>
          <h2 className={styles.mainTitle}>Naše vybrané projekty</h2>
          <p className={styles.description}>
            Pomáháme firmám růst v digitálním světě skrze moderní technologie a strategický marketing.
          </p>
        </header>

        <div className={styles.grid}>
          {visibleProjects.map((project, idx) => {
            const isHighlighted = project.isHighlighted;
            return (
              <a 
                key={project.id}
                href={`https://${project.title}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.cardLink}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <article className={`${styles.card} ${isHighlighted ? styles.highlighted : ""}`}>
                  <div className={styles.cardTop}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.projectSubtitle}>{project.subtitle}</span>
                  </div>

                  <div className={styles.cardBody}>
                    {project.services.map((service) => {
                      const IconComponent = IconMap[service.iconName];
                      return (
                        <div key={service.id} className={styles.serviceBlock}>
                          <div className={styles.serviceHeader}>
                            <div className={styles.iconWrapper}>
                              {IconComponent && <IconComponent size={18} />}
                            </div>
                            <h4 className={styles.serviceTitle}>{service.title}</h4>
                          </div>
                          
                          <ul className={styles.featureList}>
                            {service.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className={styles.cardFooter}>
                    <span className={styles.footerText}>Prozkoumat projekt</span>
                    <ArrowRight className={styles.footerIcon} size={16} />
                  </div>
                </article>
              </a>
            );
          })}
        </div>

        {hasMore && (
          <div className={styles.loadMoreContainer}>
            <button className={styles.loadMoreBtn} onClick={showMoreProjects}>
              Zobrazit další projekty
              <ChevronDown size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;