"use client";
import Image from "next/image";
import styles from "./Topics.module.css";

export default function TopicsSection() {
  return (
    <section className={styles.topicsSection}>
      <div className="container">
        {/* Upper Division */}
        <div className={styles.topicsUpper}>
          <h2 className={styles.topicsSubtitle}>WHAT WE TEACH</h2>
          <h1 className={styles.topicsTitle}>Popular Topics To Learn</h1>
          <div className={styles.topicsUnion}>
            <Image
              src="/images/teach_union.png"
              alt="Union decorative line"
              width={430}
              height={30}
            />
          </div>
          <p className={styles.topicsDescription}>
            Whether you're a beginner or a seasoned medical professional, our
            courses provide in-depth knowledge and hands-on experience in
            diagnostic ultrasound and cancer research.
          </p>
        </div>

        {/* Lower Division - Cards Grid */}
        <div className={styles.topicsCards}>
          {/* Card 1 */}
          <div className={styles.topicCard}>
            <div className={styles.cardImage}>
              <Image
                src="/images/card-image-1.jpg"
                alt="Diagnostic Medical Sonography"
                width={300}
                height={160}
              />
              <div className={styles.cardImageOverlay}></div>
            </div>
            <div className={styles.cardIcon}>
              <img
                src="/images/card-icon-1.svg"
                alt="Ultrasound probe icon"
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Diagnostic Medical Sonography
              </h3>
              <p className={styles.cardDescription}>
                Develop expertise in cardiac imaging to evaluate heart function,
                detect abnormalities, and assist in life-saving cardiac
                diagnoses.
              </p>
              <button className={styles.cardButton}>Explore Courses</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.topicCard}>
            <div className={styles.cardImage}>
              <Image
                src="/images/card-image-2.jpg"
                alt="Vascular Ultrasound"
                width={300}
                height={160}
              />
              <div className={styles.cardImageOverlay}></div>
            </div>
            <div className={styles.cardIcon}>
              <Image
                src="/images/card-icon-2.svg"
                alt="Blood vessels icon"
                width={80}
                height={80}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Vascular <br />
                Ultrasound
              </h3>
              <p className={styles.cardDescription}>
                Develop expertise in cardiac imaging to evaluate heart function,
                detect abnormalities, and assist in life-saving cardiac
                diagnoses.
              </p>
              <button className={styles.cardButton}>Explore Courses</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.topicCard}>
            <div className={styles.cardImage}>
              <Image
                src="/images/card-image-3.jpg"
                alt="Obstetrics and Gynecological Imaging"
                width={300}
                height={160}
              />
              <div className={styles.cardImageOverlay}></div>
            </div>
            <div className={styles.cardIcon}>
              <Image
                src="/images/card-icon-3.svg"
                alt="Fetus icon"
                width={80}
                height={80}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Obstetrics and Gynecological Imaging
              </h3>
              <p className={styles.cardDescription}>
                Develop expertise in cardiac imaging to evaluate heart function,
                detect abnormalities, and assist in life-saving cardiac
                diagnoses.
              </p>
              <button className={styles.cardButton}>Explore Courses</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className={styles.topicCard}>
            <div className={styles.cardImage}>
              <Image
                src="/images/card-image-4.jpg"
                alt="Cardiac Ultrasound"
                width={300}
                height={160}
              />
              <div className={styles.cardImageOverlay}></div>
            </div>
            <div className={styles.cardIcon}>
              <Image
                src="/images/card-icon-4.svg"
                alt="Heart icon"
                width={80}
                height={80}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Cardiac Ultrasound (Echocardiography)
              </h3>
              <p className={styles.cardDescription}>
                Develop expertise in cardiac imaging to evaluate heart function,
                detect abnormalities, and assist in life-saving cardiac
                diagnoses.
              </p>
              <button className={styles.cardButton}>Explore Courses</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
