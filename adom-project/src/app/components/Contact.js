"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Contact.module.css";
import contactData from "../../data/contact.json";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const { contact } = contactData;

  return (
    <section className={styles.contactSection}>
      <div className="container">
        {/* Upper Div - Title and Description */}
        <div className={styles.contactUpper}>
          <h2 className={styles.contactTitle}>{contact.title}</h2>
          <div className={styles.contactUnion}>
            <Image
              src={contact.union.src}
              alt={contact.union.alt}
              width={contact.union.width}
              height={contact.union.height}
            />
          </div>
          <p className={styles.contactDescription}>{contact.description}</p>
        </div>

        {/* Lower Div - Form and Contact Info */}
        <div className={styles.contactLower}>
          {/* Left Div - Contact Form */}
          <div className={styles.contactFormContainer}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                className={styles.formInput}
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                className={styles.formInput}
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                className={styles.formInput}
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                className={styles.formTextarea}
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className={styles.formSubmitBtn}>
                Send Message
              </button>
            </form>
          </div>

          {/* Right Div - Contact Information */}
          <div className={styles.contactInfoContainer}>
            <h3 className={styles.contactInfoTitle}>{contact.infoTitle}</h3>

            <div className={styles.contactDetails}>
              {contact.details.map((detail, index) => (
                <div key={index} className={styles.contactDetailItem}>
                  <div className={styles.contactIcon}>
                    <Image
                      src={detail.icon.src}
                      alt={detail.icon.alt}
                      width={detail.icon.width}
                      height={detail.icon.height}
                    />
                  </div>
                  <span className={styles.contactText}>
                    {detail.text
                      .split('<br class="br-mobile">')
                      .map((part, i) => (
                        <React.Fragment key={i}>
                          {part}
                          {i <
                            detail.text.split('<br class="br-mobile">').length -
                              1 && <br className={styles.brMobile} />}
                        </React.Fragment>
                      ))}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.socialMediaSection}>
              <h4 className={styles.socialTitle}>{contact.socialTitle}</h4>
              <div className={styles.socialIcons}>
                {contact.socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={styles.socialIcon}
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
        </div>
      </div>
    </section>
  );
}
