'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { NavigationData } from '../../types';
import styles from '../../styles/Navigation.module.css';

interface NavigationProps {
  data: NavigationData;
}

export const Navigation: React.FC<NavigationProps> = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Banner */}
      <div className={styles.banner}>
        {data.banner.text}
      </div>
      
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={215}
              height={60}
              className={styles.logoImage}
            />
          </div>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            {data.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className={styles.navButtons}>
            <Button variant="secondary" size="sm">
              {data.buttons[1].text}
            </Button>
            <Button variant="primary" size="sm">
              {data.buttons[0].text}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={styles.mobileMenuIcon} />
            ) : (
              <Menu className={styles.mobileMenuIcon} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          <ul className={styles.mobileMenuLinks}>
            {data.links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={styles.mobileMenuLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileMenuButtons}>
            <Button variant="secondary" size="sm" className={styles.mobileMenuButton}>
              {data.buttons[1].text}
            </Button>
            <Button variant="primary" size="sm" className={styles.mobileMenuButton}>
              {data.buttons[0].text}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
