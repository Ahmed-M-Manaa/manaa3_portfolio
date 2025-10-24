import React ,{useEffect , useState } from "react";
import styles from "./Home.module.css";
import Hero from "./Hero/Hero.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import SkillsSlider from "./SkillsSlider/SkillsSlider.jsx";
import Contact from "./Contact/Contact.jsx";
import Projects from "./projects/projects.jsx";
import Testimonial from "./Testimonial/Testimonial.jsx";
function Home() {


    const [ counter , setCounter] = useState(0);
useEffect( ()=> {
}, []);


    return (
        
        <>

          <Hero />
          <AboutMe />
          <SkillsSlider />
          <Projects />
          <Testimonial/>
          <Contact />
        </>
      );
}
export default Home;
