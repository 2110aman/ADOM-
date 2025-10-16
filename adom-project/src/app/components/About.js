"use client";
import Image from "next/image";
import styles from "./About.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        {/* Upper Division */}
        <div className={styles.aboutUpper}>
          <h2 className={styles.aboutSubtitle}>ABOUT ADOM:</h2>
          <h1 className={styles.aboutTitle}>
            Leading in Ultrasound Education and Research
          </h1>
          <div className={styles.aboutUnion}>
            <Image
              src="/images/Union.png"
              alt="Union decorative line"
              width={950}
              height={30}
            />
          </div>
        </div>

        {/* Lower Division */}
        <div className={styles.aboutLower}>
          {/* Left Visual Section */}
          <div className={styles.aboutLeft}>
            <div className={styles.aboutImages}>
              <div className={styles.aboutImageClip1}>
                <Image
                  src="/images/clip1.png"
                  alt="Medical professional with ultrasound"
                  width={412}
                  height={540}
                />
              </div>
              <div className={styles.aboutImageClip2}>
                <Image
                  src="/images/clip2.png"
                  alt="Laboratory research setting"
                  width={422}
                  height={540}
                />
              </div>
            </div>
          </div>

          {/* Right Text Section */}
          <div className={styles.aboutRight}>
            <div className={styles.aboutDescription}>
              <p>
                The Academy of Diagnostic & Osteopathic Medicine (ADOM) is
                dedicated to training the next generation of medical
                professionals in diagnostic ultrasound. Our programs provide
                hands-on training and are led by experts in the field, preparing
                doctors, medical students, and healthcare practitioners for
                excellence. With a commitment to innovation, ADOM also
                contributes to impactful cancer research, advancing both patient
                care and scientific knowledge.
              </p>
            </div>

            <div className={styles.aboutFeatures}>
              {[
                "Comprehensive courses in diagnostic ultrasound",
                "Hands-on training with expert instructors",
                "Innovative cancer research initiatives",
                "Focus on excellence in medical education and patient care",
              ].map((text, i) => (
                <div className={styles.featureItem} key={i}>
                  <Image
                    src="/images/checkList.svg"
                    alt="Check"
                    className={styles.featureCheck}
                    width={20}
                    height={20}
                  />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className={styles.aboutStats}>
              <div className={styles.statItem}>
                <div className={`${styles.statNumber} ${styles.goldNumber}`}>
                  1,000+
                </div>
                <div className={styles.statText}>
                  Graduates Across the Country
                </div>
              </div>
              <div className={styles.statLine}></div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>25+</div>
                <div className={styles.statText}>Ongoing Research Projects</div>
              </div>
              <div className={styles.statLine}></div>
              <div className={styles.statItem}>
                <div className={`${styles.statNumber} ${styles.goldNumber}`}>
                  10+
                </div>
                <div className={styles.statText}>Years of Excellence</div>
              </div>
            </div>

            <div className={styles.aboutButtonPrimary}>
              <button className={`${styles.btn} ${styles.btnPrimary}`}>
                Learn More About ADOM
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
