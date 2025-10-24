import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
    }, []);

    return (
        <>
            <div className={styles.body}>
                <div className={styles.herotext}  id="home">
                    <h1>Hi, I'm <span className={styles.highlight}>Ahmed Manaa3</span></h1>
                    <h2>Front-End Developer | React.js</h2>
                    <p>
                        Front-End developer with expertise in building responsive web applications, implementing modern architectural patterns, and delivering high-quality websites.
                    </p>
                </div>
                
                <div className={styles.twoButtons}>
                    <a href="#projects">  <button className={styles.btn}>See my projects</button>  </a>     
                    <a href="#contact"><button className={styles.btn}>Let's work together</button></a>
                </div>
            </div>
        </>
    );
}

export default Hero;