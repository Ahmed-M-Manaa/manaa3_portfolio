import React, { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav className={styles.navbar} id="home">
        <div className={styles.left}>
          <div className={styles.name}>Ahmed Manaa3</div>
        </div>

        <ul className={styles.center}>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>

        <div className={styles.right}>
 
    <div className={styles.wrapper}>
<a href="#contact" class={styles.menu__link}>contact me</a>
    </div>

          <button
            className={styles.hamburger}
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <div />
            <div />
            <div />
          </button>
        </div>
      </nav>

      {/* Sidebar overlay */}
      <div
        className={`${styles.sidebarOverlay} ${sidebarOpen ? styles.show : ""}`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <nav className={styles.sidebarNav}>
          <ul>
            <li><a href="home" onClick={closeSidebar}>Home</a></li>
            <li><a href="projects" onClick={closeSidebar}>Projects</a></li>
            <li><a href="testimonial" onClick={closeSidebar}>Testimonial</a></li>
            <li><a href="about" onClick={closeSidebar}>About Me</a></li>
            <li><a href="contact" onClick={closeSidebar}>Contact Me</a></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}