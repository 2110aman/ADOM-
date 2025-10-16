import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroLines}>
            <Image
              src="/images/lines  1.svg"
              alt="lines"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.heroLines2}>
            <Image
              src="/images/Ellipse 1.svg"
              alt="lines"
              width={249}
              height={243}
            />
          </div>
          <div className={styles.heroLines3}>
            <Image
              src="/images/Rectangle 63.svg"
              alt="lines"
              width={238}
              height={208}
            />
          </div>
          <div className={styles.heroOverlay}>
            <div className={styles.heroOverlayContentLeft}>
              <div className={styles.heroOverlayTitle}>
                Innovating <br />
                <span className={styles.heroOverlayTitleSpan}>
                  Ultrasound Education & Cancer Research.
                </span>
              </div>
              <div className={styles.heroOverlayDescription}>
                Join the ADOM Academy and gain the skills needed to thrive in
                the rapidly growing field of Diagnostic Ultrasound. Apply now to
                secure your spot!
              </div>
              <div className={styles.heroOverlayButtons}>
                <button className={`${styles.btn} ${styles.btnPrimary}`}>
                  Apply Now
                </button>
              </div>
            </div>
            <div className={styles.heroOverlayContentRight}>
              <div
                className={`${styles.leftHeroOverlayImage} ${styles.heroImage}`}
              >
                <div className={styles.left1HeroOverlayImage}>
                  <Image
                    src="/images/left-1-hero.png"
                    alt="left-1-hero"
                    width={238}
                    height={241}
                  />
                </div>
                <div className={styles.left2HeroOverlayImage}>
                  <Image
                    src="/images/left-2-hero.png"
                    alt="left-2-hero"
                    width={238}
                    height={241}
                  />
                </div>
              </div>
              <div
                className={`${styles.centerHeroOverlayImage} ${styles.heroImage}`}
              >
                <div className={styles.center1HeroOverlayImage}>
                  <Image
                    src="/images/center-1-hero.png"
                    alt="center-1-hero"
                    width={180}
                    height={242}
                  />
                </div>
                <div className={styles.center2HeroOverlayImage}>
                  <Image
                    src="/images/center-2-hero.png"
                    alt="center-2-hero"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
              <div
                className={`${styles.rightHeroOverlayImage} ${styles.heroImage}`}
              >
                <div className={styles.rightHeroOverlayImage}>
                  <Image
                    src="/images/right-hero.png"
                    alt="right-hero"
                    width={173}
                    height={319}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
