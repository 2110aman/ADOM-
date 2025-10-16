"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import footerData from "../../data/footer.json";

export default function FooterSection() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Newsletter subscription:", email);
    // Reset email
    setEmail("");
  };

  const { footer } = footerData;

  return (
    <footer className={styles.footerSection}>
      <div className="container">
        {/* Upper Footer */}
        <div className={styles.footerUpper}>
          {/* Contact and Logo Row (for responsive) */}
          <div className={styles.footerContactLogoRow}>
            {/* Left - Contact Us Details */}
            <div className={styles.footerContact}>
              <h3 className={styles.footerContactTitle}>
                {footer.contact.title}
              </h3>
              <div className={styles.footerContactDetails}>
                {footer.contact.details.map((detail, index) => (
                  <div key={index} className={styles.footerContactItem}>
                    <div className={styles.footerContactIcon}>
                      <Image
                        src={detail.icon.src}
                        alt={detail.icon.alt}
                        width={detail.icon.width}
                        height={detail.icon.height}
                      />
                    </div>
                    <span className={styles.footerContactText}>
                      {detail.text
                        .split('<br class="br-mobile-footer">')
                        .map((part, i) => (
                          <React.Fragment key={i}>
                            {part}
                            {i <
                              detail.text.split('<br class="br-mobile-footer">')
                                .length -
                                1 && <br className={styles.brMobileFooter} />}
                          </React.Fragment>
                        ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle - Logo */}
            <div className={styles.footerLogo}>
              <div className={styles.footerLogoContainer}>
                <Image
                  src={footer.logo.src}
                  alt={footer.logo.alt}
                  width={footer.logo.width}
                  height={footer.logo.height}
                  className={styles.footerLogoImage}
                />
              </div>
            </div>
          </div>

          {/* Right - Newsletter */}
          <div className={styles.footerNewsletter}>
            <h3 className={styles.footerNewsletterTitle}>
              {footer.newsletter.title}
            </h3>
            <p className={styles.footerNewsletterDescription}>
              {footer.newsletter.description}
            </p>
            <form
              className={styles.footerNewsletterForm}
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                className={styles.footerNewsletterInput}
                placeholder="Your E-mail Id"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button type="submit" className={styles.footerNewsletterBtn}>
                Register Now
              </button>
            </form>
          </div>
        </div>

        {/* Lower Footer */}
        <div className={styles.footerLower}>
          {/* Upper Lower - Navigation & Social Media */}
          <div className={styles.footerNavSocial}>
            {/* Left - Navigation Links */}
            <div className={styles.footerNavigation}>
              <nav className={styles.footerNavLinks}>
                {footer.navigation.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={styles.footerNavLink}
                  >
                    {link.text}
                  </a>
                ))}
              </nav>
            </div>

            {/* Right - Social Media Icons */}
            <div className={styles.footerSocialMedia}>
              <div className={styles.footerSocialIcons}>
                {footer.socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={styles.footerSocialIcon}
                  >
                    <Image
                      src={social.icon.src}
                      alt={social.icon.alt}
                      width={social.icon.width}
                      height={social.icon.height}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Lower Lower - Copyright & Legal */}
          <div className={styles.footerLegal}>
            {/* Left - Copyright */}
            <div className={styles.footerCopyright}>
              <p className={styles.footerCopyrightText}>
                {footer.copyright.text}
              </p>
            </div>

            {/* Right - Legal Links */}
            <div className={styles.footerLegalLinks}>
              {footer.legal.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={styles.footerLegalLink}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
