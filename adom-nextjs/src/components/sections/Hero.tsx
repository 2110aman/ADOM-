'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { HeroData } from '../../types';
import styles from '../../styles/Hero.module.css';

interface HeroProps {
  data: HeroData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const { hero } = data;

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Hero Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {hero.title}{' '}
            <span className={styles.heroTitleHighlight}>
              {hero.titleHighlight}
            </span>
          </h1>
          <p className={styles.heroDescription}>
            {hero.description}
          </p>
          <button className={styles.heroButton}>
            {hero.button.text}
          </button>
        </div>

        {/* Hero Images */}
        <div className={styles.heroImages}>
          {/* Decorative Elements */}
          <div className={styles.decorativeLines}>
            <div className={`${styles.decorativeLine} ${styles.decorativeLine1}`}></div>
            <div className={`${styles.decorativeLine} ${styles.decorativeLine2}`}></div>
            <div className={styles.decorativeEllipse}></div>
            <div className={styles.decorativeRectangle}></div>
          </div>

          {/* Hero Images */}
          <div className={styles.heroImageContainer}>
            {hero.images.hero.map((image, index) => (
              <div
                key={index}
                className={`${styles.heroImageContainer} ${
                  index === 0 ? styles.leftHeroImage :
                  index === 1 ? styles.rightHeroImage :
                  index === 2 ? styles.centerHeroImage :
                  index === 3 ? styles.bottomLeftHeroImage :
                  styles.bottomRightHeroImage
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.heroImage}
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
