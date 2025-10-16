#!/usr/bin/env python3
import re

# Read the original CSS file
with open("style.css", "r", encoding="utf-8") as f:
    content = f.read()

# Create organized CSS with proper comments
organized_css = """/* ========================================
   ADOM PROJECT - ORGANIZED CSS STYLES
   ======================================== */

/* ========================================
   1. RESET AND BASE STYLES
   ======================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ========================================
   2. CONTAINER AND SECTION STYLES
   ======================================== */
.container {
  max-width: 1320px;
  margin: 0 auto;
}

section {
  padding: 80px 60px;
}

/* Container and Section Responsive Styles */
@media (max-width: 1440px) {
  section {
    padding: 60px 40px;
  }
}

@media (max-width: 1200px) {
  section {
    padding: 50px 30px;
  }
}

@media (max-width: 768px) {
  section {
    padding: 40px 20px;
  }
}

@media (max-width: 480px) {
  section {
    padding: 15px 15px !important;
  }
}

"""

# Extract navigation section
nav_pattern = r"/\* Navigation Bar Styles \*/.*?(?=/\*Hero Section\*/)"
nav_match = re.search(nav_pattern, content, re.DOTALL)
if nav_match:
    nav_content = nav_match.group(0)
    organized_css += (
        """/* ========================================
   3. NAVIGATION BAR STYLES
   ======================================== */
"""
        + nav_content
        + "\n\n"
    )

# Extract hero section
hero_pattern = r"/\*Hero Section\*/.*?(?=\.topics-section)"
hero_match = re.search(hero_pattern, content, re.DOTALL)
if hero_match:
    hero_content = hero_match.group(0)
    organized_css += (
        """/* ========================================
   4. HERO SECTION STYLES
   ======================================== */
"""
        + hero_content
        + "\n\n"
    )

# Extract topics section
topics_pattern = r"\.topics-section.*?(?=\.about-section)"
topics_match = re.search(topics_pattern, content, re.DOTALL)
if topics_match:
    topics_content = topics_match.group(0)
    organized_css += (
        """/* ========================================
   5. TOPICS SECTION STYLES
   ======================================== */
"""
        + topics_content
        + "\n\n"
    )

# Extract about section
about_pattern = r"\.about-section.*?(?=\.courses-section)"
about_match = re.search(about_pattern, content, re.DOTALL)
if about_match:
    about_content = about_match.group(0)
    organized_css += (
        """/* ========================================
   6. ABOUT SECTION STYLES
   ======================================== */
"""
        + about_content
        + "\n\n"
    )

# Extract courses section
courses_pattern = r"\.courses-section.*?(?=\.testimonial-section)"
courses_match = re.search(courses_pattern, content, re.DOTALL)
if courses_match:
    courses_content = courses_match.group(0)
    organized_css += (
        """/* ========================================
   7. COURSES SECTION STYLES
   ======================================== */
"""
        + courses_content
        + "\n\n"
    )

# Extract testimonial section
testimonial_pattern = r"\.testimonial-section.*?(?=\.research-section)"
testimonial_match = re.search(testimonial_pattern, content, re.DOTALL)
if testimonial_match:
    testimonial_content = testimonial_match.group(0)
    organized_css += (
        """/* ========================================
   8. TESTIMONIAL SECTION STYLES
   ======================================== */
"""
        + testimonial_content
        + "\n\n"
    )

# Extract research section
research_pattern = r"\.research-section.*?(?=\.video-section)"
research_match = re.search(research_pattern, content, re.DOTALL)
if research_match:
    research_content = research_match.group(0)
    organized_css += (
        """/* ========================================
   9. RESEARCH SECTION STYLES
   ======================================== */
"""
        + research_content
        + "\n\n"
    )

# Extract video section
video_pattern = r"\.video-section.*?(?=\.footer-section)"
video_match = re.search(video_pattern, content, re.DOTALL)
if video_match:
    video_content = video_match.group(0)
    organized_css += (
        """/* ========================================
   10. VIDEO SECTION STYLES
   ======================================== */
"""
        + video_content
        + "\n\n"
    )

# Extract insights section
insights_pattern = r"\.insights-section.*?(?=\.affiliations-section)"
insights_match = re.search(insights_pattern, content, re.DOTALL)
if insights_match:
    insights_content = insights_match.group(0)
    organized_css += (
        """/* ========================================
   11. INSIGHTS SECTION STYLES
   ======================================== */
"""
        + insights_content
        + "\n\n"
    )

# Extract affiliations section
affiliations_pattern = r"\.affiliations-section.*?(?=\.contact-section)"
affiliations_match = re.search(affiliations_pattern, content, re.DOTALL)
if affiliations_match:
    affiliations_content = affiliations_match.group(0)
    organized_css += (
        """/* ========================================
   12. AFFILIATIONS SECTION STYLES
   ======================================== */
"""
        + affiliations_content
        + "\n\n"
    )

# Extract contact section
contact_pattern = r"\.contact-section.*?(?=\.footer-section)"
contact_match = re.search(contact_pattern, content, re.DOTALL)
if contact_match:
    contact_content = contact_match.group(0)
    organized_css += (
        """/* ========================================
   13. CONTACT SECTION STYLES
   ======================================== */
"""
        + contact_content
        + "\n\n"
    )

# Extract footer section
footer_pattern = r"\.footer-section.*"
footer_match = re.search(footer_pattern, content, re.DOTALL)
if footer_match:
    footer_content = footer_match.group(0)
    organized_css += (
        """/* ========================================
   14. FOOTER SECTION STYLES
   ======================================== */
"""
        + footer_content
        + "\n\n"
    )

# Write organized CSS
with open("style_organized.css", "w", encoding="utf-8") as f:
    f.write(organized_css)

print("CSS file organized successfully!")
