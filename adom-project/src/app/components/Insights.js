"use client";
import React from "react";
import Image from "next/image";
import styles from "./Insights.module.css";
import insightsData from "../../data/insights.json";

export default function InsightsSection() {
  const { insights } = insightsData;

  return (
    <section className={styles.insightsSection}>
      <div className="container">
        {/* Upper Division */}
        <div className={`${styles.aboutUpper} ${styles.insightsUpper}`}>
          <h2 className={styles.aboutSubtitle}>{insights.subtitle}</h2>
          <h1 className={styles.aboutTitle}>{insights.title}</h1>
          <div className={styles.insightsUnion}>
            <Image
              src={insights.union.src}
              alt={insights.union.alt}
              width={insights.union.width}
              height={insights.union.height}
            />
          </div>
        </div>

        {/* Lower Division */}
        <div className={styles.insightsLower}>
          {/* Left Side - Big Card */}
          <div className={styles.insightsLeft}>
            <div className={styles.insightsBigCard}>
              <div className={styles.insightsBigCardImage}>
                <Image
                  src={insights.bigCard.image.src}
                  alt={insights.bigCard.image.alt}
                  width={insights.bigCard.image.width}
                  height={insights.bigCard.image.height}
                />
                <div className={styles.insightsBigCardOverlay}>
                  <div className={styles.insightsBigCardCategory}>
                    {insights.bigCard.category}
                  </div>
                  <h3 className={styles.insightsBigCardTitle}>
                    {insights.bigCard.title}
                  </h3>
                  <div className={styles.insightsBigCardMeta}>
                    <span className={styles.insightsMetaItem}>
                      <Image
                        src={insights.bigCard.meta.calendar.icon.src}
                        alt={insights.bigCard.meta.calendar.icon.alt}
                        width={insights.bigCard.meta.calendar.icon.width}
                        height={insights.bigCard.meta.calendar.icon.height}
                        className={styles.insightsMetaIcon}
                      />
                      {insights.bigCard.meta.calendar.text}
                    </span>
                    <span className={styles.insightsMetaSeparator}>|</span>
                    <span className={styles.insightsMetaItem}>
                      <Image
                        src={insights.bigCard.meta.clock.icon.src}
                        alt={insights.bigCard.meta.clock.icon.alt}
                        width={insights.bigCard.meta.clock.icon.width}
                        height={insights.bigCard.meta.clock.icon.height}
                        className={styles.insightsMetaIcon}
                      />
                      {insights.bigCard.meta.clock.text}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.insightsBigCardIcon}>
                <Image
                  src={insights.bigCard.icon.src}
                  alt={insights.bigCard.icon.alt}
                  width={insights.bigCard.icon.width}
                  height={insights.bigCard.icon.height}
                />
              </div>
            </div>
          </div>

          {/* Right Side - 4 Cards Grid */}
          <div className={styles.insightsRight}>
            <div className={styles.insightsCardsGrid}>
              {insights.cards.map((card, index) => (
                <div key={index} className={styles.insightsCard}>
                  <div className={styles.insightsCardImage}>
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      width={card.image.width}
                      height={card.image.height}
                    />
                    <div className={styles.insightsCardOverlay}>
                      <div className={styles.insightsCardCategory}>
                        {card.category}
                      </div>
                    </div>
                  </div>
                  <div className={styles.insightsCardIcon}>
                    <Image
                      src={card.icon.src}
                      alt={card.icon.alt}
                      width={card.icon.width}
                      height={card.icon.height}
                    />
                  </div>
                  <div className={styles.insightsCardContent}>
                    <h4 className={styles.insightsCardContentTitle}>
                      {card.title}
                    </h4>
                    <div className={styles.insightsCardContentMeta}>
                      <span className={styles.insightsMetaItem}>
                        <Image
                          src={card.meta.calendar.icon.src}
                          alt={card.meta.calendar.icon.alt}
                          width={card.meta.calendar.icon.width}
                          height={card.meta.calendar.icon.height}
                          className={styles.insightsMetaIcon}
                        />
                        {card.meta.calendar.text}
                      </span>
                      <span className={styles.insightsMetaSeparator}>|</span>
                      <span className={styles.insightsMetaItem}>
                        <Image
                          src={card.meta.clock.icon.src}
                          alt={card.meta.clock.icon.alt}
                          width={card.meta.clock.icon.width}
                          height={card.meta.clock.icon.height}
                          className={styles.insightsMetaIcon}
                        />
                        {card.meta.clock.text}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className={styles.insightsCta}>
          <button
            className={`${styles.btn} ${styles.btnPrimary} ${styles.insightsExploreBtn}`}
          >
            {insights.ctaButton.text}
          </button>
        </div>
      </div>
    </section>
  );
}
