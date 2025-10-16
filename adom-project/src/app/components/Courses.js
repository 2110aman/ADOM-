"use client";
import React from "react";
import Image from "next/image";
import styles from "./Courses.module.css";
import coursesData from "../../data/courses.json";

export default function CoursesSection() {
  const { courses } = coursesData;

  // Split courses into two rows (2 cards per row)
  const firstRow = courses.courseCards.slice(0, 2);
  const secondRow = courses.courseCards.slice(2, 4);

  return (
    <section className={styles.coursesSection}>
      <div className="container">
        {/* Upper Division */}
        <div className={`${styles.aboutUpper} ${styles.coursesUpper}`}>
          <h2 className={styles.aboutSubtitle}>{courses.subtitle}</h2>
          <h1 className={styles.aboutTitle}>{courses.title}</h1>
          <div className={styles.coursesUnion}>
            <Image
              src={courses.union.src}
              alt={courses.union.alt}
              width={courses.union.width}
              height={courses.union.height}
            />
          </div>
          <p className={styles.topicsDescription}>{courses.description}</p>
        </div>

        {/* Lower Division - Course Cards */}
        <div className={styles.coursesLower}>
          {/* First Row */}
          <div className={styles.coursesRow}>
            {firstRow.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseCardImage}>
                  <Image
                    src={course.image.src}
                    alt={course.image.alt}
                    width={course.image.width}
                    height={course.image.height}
                  />
                </div>
                <div className={styles.courseCardContent}>
                  <h3 className={styles.courseCardTitle}>{course.title}</h3>
                  <div className={styles.courseDetails}>
                    {course.details.map((detailGroup, index) => (
                      <div key={index} className={styles.courseDetailItem}>
                        {detailGroup.items.map((item, itemIndex) => (
                          <React.Fragment key={itemIndex}>
                            <Image
                              src={item.icon.src}
                              alt={item.icon.alt}
                              width={item.icon.width}
                              height={item.icon.height}
                              className={styles.courseIcon}
                            />
                            <span>{item.text}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className={styles.courseProgram}>
                    <h4>{course.program.title}</h4>
                    <p>{course.program.description}</p>
                  </div>
                  <div className={styles.courseButtons}>
                    {course.buttons.map((button, index) => (
                      <button
                        key={index}
                        className={`${styles.btn} ${
                          button.type === "primary"
                            ? `${styles.btnPrimary} ${styles.courseApplyBtn}`
                            : `${styles.btnSecondary} ${styles.courseLearnBtn}`
                        }`}
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className={styles.coursesRow}>
            {secondRow.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseCardImage}>
                  <Image
                    src={course.image.src}
                    alt={course.image.alt}
                    width={course.image.width}
                    height={course.image.height}
                  />
                </div>
                <div className={styles.courseCardContent}>
                  <h3 className={styles.courseCardTitle}>{course.title}</h3>
                  <div className={styles.courseDetails}>
                    {course.details.map((detailGroup, index) => (
                      <div key={index} className={styles.courseDetailItem}>
                        {detailGroup.items.map((item, itemIndex) => (
                          <React.Fragment key={itemIndex}>
                            <Image
                              src={item.icon.src}
                              alt={item.icon.alt}
                              width={item.icon.width}
                              height={item.icon.height}
                              className={styles.courseIcon}
                            />
                            <span>{item.text}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className={styles.courseProgram}>
                    <h4>{course.program.title}</h4>
                    <p>{course.program.description}</p>
                  </div>
                  <div className={styles.courseButtons}>
                    {course.buttons.map((button, index) => (
                      <button
                        key={index}
                        className={`${styles.btn} ${
                          button.type === "primary"
                            ? `${styles.btnPrimary} ${styles.courseApplyBtn}`
                            : `${styles.btnSecondary} ${styles.courseLearnBtn}`
                        }`}
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className={styles.coursesCta}>
          <button
            className={`${styles.btn} ${styles.btnPrimary} ${styles.coursesExploreBtn}`}
          >
            {courses.ctaButton.text}
          </button>
        </div>
      </div>
    </section>
  );
}
