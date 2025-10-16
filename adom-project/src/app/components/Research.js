"use client";
import React from "react";
import Image from "next/image";
import styles from "./Research.module.css";
import researchData from "../../data/research.json";

export default function ResearchSection() {
  const { research } = researchData;

  return (
    <section className={styles.researchSection}>
      <div className="container">
        {/* Upper Division */}
        <div className={`${styles.aboutUpper} ${styles.researchUpper}`}>
          <h2 className={styles.aboutSubtitle}>{research.subtitle}</h2>
          <h1 className={styles.aboutTitle}>{research.title}</h1>
          <div className={styles.researchUnion}>
            <Image
              src={research.union.src}
              alt={research.union.alt}
              width={research.union.width}
              height={research.union.height}
            />
          </div>
        </div>

        {/* Lower Division */}
        <div className={styles.researchLower}>
          {/* Left Visual Section */}
          <div className={styles.researchLeft}>
            <div className={styles.researchImages}>
              <div className={styles.researchImageClip1}>
                <Image
                  src={research.images.clip1.src}
                  alt={research.images.clip1.alt}
                  width={research.images.clip1.width}
                  height={research.images.clip1.height}
                />
              </div>
              <div className={styles.researchImageClip2}>
                <Image
                  src={research.images.clip2.src}
                  alt={research.images.clip2.alt}
                  width={research.images.clip2.width}
                  height={research.images.clip2.height}
                />
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className={styles.researchRight}>
            <div className={styles.researchContent}>
              <h3 className={styles.researchContentTitle}>
                {research.content.title}
              </h3>

              {/* Research Areas Grid */}
              <div className={styles.researchAreasGrid}>
                {research.content.areas.map((area, index) => (
                  <div key={index} className={styles.researchAreaItem}>
                    <div className={styles.researchAreaIcon}>
                      <Image
                        src={area.icon.src}
                        alt={area.icon.alt}
                        width={area.icon.width}
                        height={area.icon.height}
                      />
                    </div>
                    <div className={styles.researchAreaContent}>
                      <h4 className={styles.researchAreaTitle}>{area.title}</h4>
                      <p
                        className={styles.researchAreaDescription}
                        dangerouslySetInnerHTML={{ __html: area.description }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action Button */}
              <div className={styles.researchCta}>
                <button
                  className={`${styles.btn} ${styles.btnPrimary} ${styles.researchCtaBtn}`}
                >
                  {research.ctaButton.text}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
