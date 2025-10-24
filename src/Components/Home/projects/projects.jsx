import React, { useState, useEffect } from "react";
import styles from "./projects.module.css";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const arraycard = [
    {
      Image: "../src/assets/calc.jpeg",
      title: "Calculator App", 
      text: "Technologies: React, Node.js , react-router, react-hooks",
      category: "REACT",
      link:"https://ahmed-m-manaa.github.io/calculator/",
    },
    {
     Image: "../src/assets/stop.gif",
     title: "Stop watch Application", 
     text: "Technologies: JavaScript , LocalStorage",
     category: "JavaScript",
      link:"https://ahmed-m-manaa.github.io/STOP-WATCH/",
   },
   
   {
     Image: "../src/assets/2019-Bugatti-Divo-001-1600.jpg",
     title: "Portfolio Website", 
     text: "Technologies: HTML, CSS, JavaScript",
     category: "HTML&CSS",
      link:"https://ahmed-m-manaa.github.io/a-compelete-project-with-bootstrab/",
   },
  {
    Image: "../src/assets/wall.jpg",
    title: "Cars Website", 
    text: "Technologies: HTML, CSS",
    category: "HTML&CSS",
      link:"https://ahmed-m-manaa.github.io/website-for-cars/",
  },
  {
    Image: "../src/assets/crud.png",
    title: "CRUD Application", 
    text: "Technologies: JavaScript , LocalStorage",
    category: "JavaScript",
      link:"https://ahmed-m-manaa.github.io/CRUD_project/",
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL Projects");
  const [filteredCards, setFilteredCards] = useState(arraycard);
useEffect(() => {
  if (activeFilter === "ALL Projects") {
    setFilteredCards(arraycard);
  } else {
    const filtered = arraycard.filter(card => 
      card.category === activeFilter
    );
    setFilteredCards(filtered);
  }
}, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <main className={styles.mainclass}
      id="projects">
      <section className={styles.flex}>
        {/* Sidebar Filter Buttons */}
        <div className={`${styles['right-section']} ${styles['btn-section']}`}>
          <ButtonGroup vertical className={styles.buttonGroup}>
            <button 
              className={`${styles.btn} ${activeFilter === "ALL Projects" ? styles.active : ''}`}
              onClick={() => handleFilterClick("ALL Projects")}
            >
              ALL Projects
            </button>
            <button 
              className={`${styles.btn} ${activeFilter === "HTML&CSS" ? styles.active : ''}`}
              onClick={() => handleFilterClick("HTML&CSS")}
            >
              HTML&CSS
            </button>
            <button
              className={`${styles.btn} ${activeFilter === "JavaScript" ? styles.active : ''}`}
              onClick={() => handleFilterClick("JavaScript")}
            >
              JavaScript
            </button>
            <button 
              className={`${styles.btn} ${activeFilter === "REACT" ? styles.active : ''}`}
              onClick={() => handleFilterClick("REACT")}
            >
              REACT
            </button>
          </ButtonGroup>
        </div>

        {/* Projects Grid */}
        <div className={styles['left-section']}>
          <div className={styles.projectsGrid}>
            {filteredCards.map((itemcard, index) => (
              <Card key={index} className={styles.projectCard}>
                <Card.Img 
                  variant="top" 
                  src={itemcard.Image} 
                  className={styles.cardImage}
                  alt={itemcard.title}
                /> 
                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>
                    {itemcard.title}
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    {itemcard.text}
                  </Card.Text>
                  <div className={styles.cardFooter}>
                    <Button  className={styles.projectButton}
                    href={itemcard.link}
                    target="blank"
                    >
                      View Project
                    </Button>
                    <span className={styles.projectCategory}>
                      {itemcard.category}
                    </span>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;