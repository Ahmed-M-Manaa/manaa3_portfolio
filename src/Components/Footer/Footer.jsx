import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiUpwork, SiFreelancer, SiFiverr } from "react-icons/si";

function Footer() {
  return (
    <div className={styles.maindiv}>
      <div className={styles.footerContainer}>
        {/* Left Name */}
        <div className={styles.leftName}>
          <h1>Ahmed Manaa3</h1>
        </div>

        {/* Right section */}
        <div className={styles.rightSection}>
          {/* Top content */}
          <div className={styles.topContent}>
            <div className={styles.contactMe}>
              <h3>Contact Me</h3>
              <div className={styles.icons}>
                {" "}
                <a
                  href="https://www.linkedin.com/in/ahmed-mnaa-8380ba294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.fiverr.com/ahmed_manaa3/buying?source=avatar_menu_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <SiFiverr />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01a7880c8b0770c7ef"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Upwork"
                >
                  <SiUpwork />
                </a>
                <a
                  href="https://www.freelancer.com/u/AhmedManaa3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Freelancer"
                >
                  <SiFreelancer />
                </a>
                <a
                  href="mailto:ahmdmana2005@gmail.com"
                  aria-label="Email"
                  target="_blank"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.quickLinks}>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#testimonial">Testimonial</a>
                </li>
                <li>
                  <a href="#contact">Contact Me</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className={styles.divider} />

          {/* Copyright */}
          <div className={styles.copyright}>
            © 2025 ahmed manaa3. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
