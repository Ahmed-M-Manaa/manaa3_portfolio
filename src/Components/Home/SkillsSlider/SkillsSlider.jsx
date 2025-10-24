import React from 'react';
import styles from './SkillsSlider.module.css';
import { SiReactrouter } from 'react-icons/si';
import { IoLogoNpm } from 'react-icons/io5';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { FaGitSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';
import { SiReact } from 'react-icons/si';

const SkillsSlider = () => {
  const skills = [
    {
      name: 'Javascript',
      icon: <IoLogoJavascript />,
      description: 'Modern ES6+ JavaScript for interactive web applications'
    },
    {
      name: 'Bootstrap',
      icon: <SiBootstrap />,
      description: 'Responsive front-end framework for modern websites'
    },
    {
      name: 'React',
      icon: <SiReact />,
      description: 'Library for building user interfaces with reusable components'
    }
    ,
    {
      name: 'npm',
      icon: <IoLogoNpm />
,
      description: 'Package manager for JavaScript and Node.js'
    }
    ,
    {
      name: 'tailwind',
      icon: <SiTailwindcss />,
      description: 'Utility-first CSS framework for rapid UI development'
    },
    {
      name: 'React router',
      icon: <SiReactrouter />,
      description: 'Library for building user interfaces with reusable components'
    },
    {
      name: 'Redux',
      icon: <TbBrandRedux />,
      description: 'Library for managing application state in React applications'
    }
    ,
    {
      name: 'git',
      icon: <FaGitSquare />,
      description: 'Version control system for tracking changes in code'
    }
    ,
    {
      name: 'github',
      icon: <FaGithub />,
      description: 'Platform for version control and collaboration'
    }
  ];

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.sliderTrack}>
        {/* First set of skills */}
        {skills.map((skill, index) => (
          <div key={`first-${index}`} className={styles.skillCard}>
            <div className={styles.icon}>{skill.icon}</div>
            <h3 className={styles.skillName}>{skill.name}</h3>
            <p className={styles.description}>{skill.description}</p>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {skills.map((skill, index) => (
          <div key={`second-${index}`} className={styles.skillCard}>
            <div className={styles.icon}>{skill.icon}</div>
            <h3 className={styles.skillName}>{skill.name}</h3>
            <p className={styles.description}>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSlider;