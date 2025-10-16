"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Testimonial.module.css";

export default function TestimonialSection() {
  const [activeProfile, setActiveProfile] = useState(1);

  // Testimonial data for each profile
  const testimonialData = {
    1: {
      position: "Chief Resident Internal Medicine, UCSD",
      name: "Sarah L.",
      text: "The quality and reliability of the equipment from PPE Rentals have significantly improved our workplace safety. The rental process is seamless, and their team is always ready to assist with any questions or needs we have.",
      logo: "/images/uni-logo-right.png",
    },
    2: {
      position: "Senior Research Fellow, Johns Hopkins",
      name: "John M.",
      text: "ADOM Academy's ultrasound training program exceeded my expectations. The hands-on approach and expert instructors helped me master advanced techniques that I now use daily in my practice.",
      logo: "/images/university_logo.svg",
    },
    3: {
      position: "Medical Director, Harvard Medical School",
      name: "Dr. Smith",
      text: "The comprehensive curriculum and state-of-the-art facilities at ADOM Academy provided me with the skills needed to excel in diagnostic ultrasound. Highly recommend their programs to any medical professional.",
      logo: "/images/univeristy-left.svg",
    },
  };

  // Function to update testimonial content
  const updateTestimonial = (profileId) => {
    setActiveProfile(profileId);
  };

  const currentData = testimonialData[activeProfile];

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className={styles.testimonialContent}>
          {/* Left Side - Image */}
          <div className={styles.testimonialLeft}>
            <div className={styles.testimonialImage}>
              <Image
                src="/images/side_image.png"
                alt="Laboratory setting with medical professionals"
                width={422}
                height={639}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={styles.testimonialRight}>
            {/* Header */}
            <div className={`${styles.aboutUpper} ${styles.testimonialUpper}`}>
              <h2 className={styles.aboutSubtitle}>TESTIMONIAL</h2>
              <h1 className={styles.aboutTitle}>Our Students Feedback</h1>
              <div className={styles.testimonialUnion}>
                <Image
                  src="/images/text_union.svg"
                  alt="Union decorative line"
                  width={404}
                  height={30}
                />
              </div>
            </div>

            {/* University Logo Box */}
            <div className={styles.universityLogoBox}>
              <Image
                src={currentData.logo}
                alt="University Logo"
                width={320}
                height={80}
                className={styles.universityLogo}
              />
            </div>

            {/* Testimonial Details */}
            <div className={styles.testimonialDetails}>
              <p className={styles.testimonialPosition}>
                {currentData.position}
              </p>
              <p className={styles.testimonialName}>{currentData.name}</p>
            </div>

            {/* Testimonial Quote */}
            <div className={styles.testimonialQuote}>
              <p>{currentData.text}</p>
            </div>

            {/* Profile Pictures */}
            <div className={styles.testimonialProfiles}>
              <div
                className={`${styles.profileItem} ${
                  activeProfile === 1 ? styles.active : ""
                }`}
                onClick={() => updateTestimonial(1)}
              >
                <div className={styles.profileItemOverlay}>
                  <Image
                    src="/images/profile1.png"
                    alt="Sarah L."
                    width={64}
                    height={64}
                    className={styles.profileImage}
                  />
                </div>
              </div>
              <div
                className={`${styles.profileItem} ${
                  activeProfile === 2 ? styles.active : ""
                }`}
                onClick={() => updateTestimonial(2)}
              >
                <div className={styles.profileItemOverlay}>
                  <Image
                    src="/images/profile2.png"
                    alt="John M."
                    width={64}
                    height={64}
                    className={styles.profileImage}
                  />
                </div>
              </div>
              <div
                className={`${styles.profileItem} ${
                  activeProfile === 3 ? styles.active : ""
                }`}
                onClick={() => updateTestimonial(3)}
              >
                <div className={styles.profileItemOverlay}>
                  <Image
                    src="/images/profile3.png"
                    alt="Dr. Smith"
                    width={64}
                    height={64}
                    className={styles.profileImage}
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
