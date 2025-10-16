"use client";
import React from "react";
import Image from "next/image";
import styles from "./Affiliations.module.css";
import affiliationsData from "../../data/affiliations.json";

export default function AffiliationsSection() {
  const { affiliations } = affiliationsData;

  return (
    <section className={styles.affiliationsSection}>
      <div className="container">
        {/* Upper Part - Same style as topics section */}
        <div className={styles.topicsUpper}>
          <h2 className={styles.topicsTitle}>{affiliations.title}</h2>
          <div className={styles.topicsUnion}>
            <Image
              src={affiliations.union.src}
              alt={affiliations.union.alt}
              width={affiliations.union.width}
              height={affiliations.union.height}
            />
          </div>
          <p className={styles.topicsDescription}>{affiliations.description}</p>
        </div>

        {/* Lower Part - Two Cards */}
        <div className={styles.affiliationsLower}>
          {affiliations.cards.map((card, index) => (
            <div key={index} className={styles.affiliationCard}>
              <div className={styles.affiliationLogoBox}>
                <Image
                  src={card.logo.src}
                  alt={card.logo.alt}
                  width={card.logo.width}
                  height={card.logo.height}
                  className={styles.affiliationLogo}
                />
              </div>
              <div className={styles.affiliationContent}>
                <h4 className={styles.affiliationTitle}>{card.title}</h4>
                <p className={styles.affiliationDescription}>
                  {card.description}
                </p>
                <button className={styles.affiliationBtn}>
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
