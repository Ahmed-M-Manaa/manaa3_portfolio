import React from 'react';
import styles from './AboutMe.module.css';
import { FaCode, FaGraduationCap, FaLightbulb, FaRocket } from 'react-icons/fa';


const AboutMe = () => {
  return (
    <section className={styles.aboutContainer} id="about">
        <div className={styles.secdiv}>
      <h2 className={styles.heading}>About   <span className={styles.highlight}> Ahmed manaa3 </span></h2>
      <p className={styles.paragraph1}>
        I'm a FrontEnd Developer focused on building responsive and high quality one-page websites .
      </p>
      <p className={styles.paragraph}>
 cutting-edge technologies. My expertise includes React and Next.js development, focusing on high-speed performance and comprehensive SEO optimization to ensure optimal user engagement and search visibility.

      </p>
      </div>
    </section>








  );
};

export default AboutMe;
