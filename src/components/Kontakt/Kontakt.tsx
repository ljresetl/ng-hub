"use client";

import React from "react";
import { Home, Wallet, Phone, Mail, Globe, Send } from "lucide-react";
import styles from "./Kontakt.module.scss";

const Contact: React.FC = () => {
  return (
    <section className={styles.contact} id="kontakt">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2>KONTAKT</h2>
          <div className={styles.divider}>
            <span className={styles.line}></span>
            <span className={styles.icon}>〰</span>
            <span className={styles.line}></span>
          </div>
          <p>
            Poradíme Vám a navrhneme nejlepší řešení při realizaci www stránek, internetových obchodů,
            optimalizaci pro vyhledávání (SEO), realizaci IT kurzů a školení.
          </p>
        </header>

        <div className={styles.content}>
          {/* ЛІВА ЧАСТИНА: СУЧАСНА ФОРМА */}
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input type="text" id="name" placeholder=" " required />
              <label htmlFor="name">Vaše jméno (vyžadováno)</label>
              <div className={styles.focusLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">Váš email (vyžadováno)</label>
              <div className={styles.focusLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <input type="tel" id="phone" placeholder=" " />
              <label htmlFor="phone">Váš telefon</label>
              <div className={styles.focusLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <textarea id="message" placeholder=" " rows={5}></textarea>
              <label htmlFor="message">Vaše zpráva</label>
              <div className={styles.focusLine}></div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <Send size={18} />
              ODESLAT
            </button>
          </form>

          {/* ПРАВА ЧАСТИНА: ІНФОРМАЦІЯ */}
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <div className={styles.infoTitle}>
                <Home className={styles.mainIcon} />
                <h3>PROVOZOVNA</h3>
              </div>
              <div className={styles.details}>
                <p className={styles.companyName}>NG Consulting s.r.o.</p>
                <p>Hanychovská 575/33</p>
                <p>460 07 Liberec</p>
                <div className={styles.contactsRow}>
                  <p><Phone size={14} /> +420 775 133 557</p>
                  <p><Phone size={14} /> +420 608 133 557</p>
                </div>
                <div className={styles.linksRow}>
                  <p><Globe size={14} /> www.ngsconsulting.cz</p>
                  <p><Mail size={14} /> info@ngsconsulting.cz</p>
                </div>
                <div className={styles.box}>DATOVÁ SCHRÁNKA: 6tecj37</div>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoTitle}>
                <Wallet className={styles.mainIcon} />
                <h3>FAKTURAČNÍ ÚDAJE</h3>
              </div>
              <div className={styles.details}>
                <p className={styles.companyName}>NG Consulting s.r.o.</p>
                <p>Ševčíkova 427/7</p>
                <p>460 06 Liberec 6</p>
                <div className={styles.ids}>
                  <span>IČO: 22792988</span>
                  <span>DIČ: CZ22792988</span>
                </div>
                <div className={styles.contactsRow}>
                  <p><Phone size={14} /> +420 775 133 557</p>
                  <p><Phone size={14} /> +420 608 133 557</p>
                </div>
                <div className={styles.linksRow}>
                  <p><Globe size={14} /> www.ngsconsulting.cz</p>
                  <p><Mail size={14} /> info@ngsconsulting.cz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;