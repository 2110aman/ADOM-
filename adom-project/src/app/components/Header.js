"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  // Close menu when clicking on mobile nav links
  const handleMobileNavLinkClick = () => {
    closeMobileMenu();
  };

  // Close menu when clicking on mobile nav buttons
  const handleMobileNavButtonClick = () => {
    closeMobileMenu();
  };

  // Cleanup effect to reset body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Upper Banner Section */}
        <section className={styles.navBanner}>
          <div className={styles.container}>
            <p className={styles.bannerText}>
              Empowering Future Experts in Diagnostic Ultrasound through
              In-Depth Education and Research
            </p>
          </div>
        </section>

        {/* Main Navigation Section */}
        <section className={styles.navMain}>
          <div className={styles.container}>
            <div className={styles.navContent}>
              {/* Logo Section */}
              <div className={styles.logoSection}>
                <a href="#">
                  <Image
                    src="/images/logo-trans.png"
                    alt="ADOM Logo"
                    width={215}
                    height={60}
                    className={styles.logoIcon}
                  />
                </a>
              </div>

              {/* Navigation Links */}
              <div className={styles.navLinks}>
                <a href="#" className={styles.navLink}>
                  Home
                </a>
                <a href="#" className={styles.navLink}>
                  About Us
                </a>
                <a href="#" className={styles.navLink}>
                  Programs
                </a>
                <a href="#" className={styles.navLink}>
                  Admissions
                </a>
                <a href="#" className={styles.navLink}>
                  Research
                </a>
                <a href="#" className={styles.navLink}>
                  Contact Us
                </a>
              </div>

              {/* Action Buttons */}
              <div className={styles.navButtons}>
                <button className={`${styles.btn} ${styles.btnPrimary}`}>
                  Apply Now
                </button>
                <button className={`${styles.btn} ${styles.btnSecondary}`}>
                  Virtual Tour
                </button>
              </div>

              {/* Hamburger Menu Button */}
              <div className={styles.hamburgerMenu}>
                <button
                  className={`${styles.hamburgerBtn} ${
                    isMobileMenuOpen ? styles.active : ""
                  }`}
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  <span className={styles.hamburgerLine}></span>
                  <span className={styles.hamburgerLine}></span>
                  <span className={styles.hamburgerLine}></span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </nav>

      {/* Mobile/Tablet Navigation Menu */}
      <div
        className={`${styles.mobileNav} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
      >
        <div className={styles.mobileNavContent}>
          {/* Mobile Logo */}
          <div className={styles.mobileLogo}>
            <Image
              src="/images/logo-trans.png"
              alt="ADOM Logo"
              width={180}
              height={50}
              className={styles.mobileLogoIcon}
            />
            <button
              className={styles.mobileMenuClose}
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className={styles.mobileNavLinks}>
            <a
              href="#"
              className={styles.mobileNavLink}
              onClick={handleMobileNavLinkClick}
            >
              Home
            </a>
            <a
              href="#"
              className={styles.mobileNavLink}
              onClick={handleMobileNavLinkClick}
            >
              About Us
            </a>
            <a
              href="#"
              className={styles.mobileNavLink}
              onClick={handleMobileNavLinkClick}
            >
              Programs
            </a>
            <a
              href="#"
              className={styles.mobileNavLink}
              onClick={handleMobileNavLinkClick}
            >
              Admissions
            </a>
            <a
              href="#"
              className={styles.mobileNavLink}
              onClick={handleMobileNavLinkClick}
            >
              Research
            </a>
            <a
              href="#"
              className={styles.mobileNavLink}
              onClick={handleMobileNavLinkClick}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Action Buttons */}
          <div className={styles.mobileNavButtons}>
            <button
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={handleMobileNavButtonClick}
            >
              Apply Now
            </button>
            <button
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={handleMobileNavButtonClick}
            >
              Virtual Tour
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`${styles.mobileNavOverlay} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
        onClick={closeMobileMenu}
      ></div>
    </header>
  );
}
