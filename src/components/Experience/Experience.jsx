import React from "react";
import styles from "./Experience.module.css";

import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import { FaPython, FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export const Experience = () => {
  return (
    <section className={styles.container} id="technical-skills">
      <h2 className={styles.title}>Technical Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skill}>
          <FaReact className={styles.icon} title="React" />
          <p>React</p>
        </div>
        <div className={styles.skill}>
          <SiMongodb className={styles.icon} title="MongoDB" />
          <p>MongoDB</p>
        </div>
        <div className={styles.skill}>
          <FaNodeJs className={styles.icon} title="Node.js" />
          <p>Node.js</p>
        </div>
        <div className={styles.skill}>
          <SiExpress className={styles.icon} title="Express" />
          <p>Express</p>
        </div>
        <div className={styles.skill}>
          <FaDatabase className={styles.icon} title="SQL" />
          <p>SQL</p>
        </div>
        <div className={styles.skill}>
          <SiMysql className={styles.icon} title="MySQL" />
          <p>MySQL</p>
        </div>
        <div className={styles.skill}>
          <FaJsSquare className={styles.icon} title="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className={styles.skill}>
          <FaHtml5 className={styles.icon} title="HTML5" />
          <p>HTML5</p>
        </div>
        <div className={styles.skill}>
          <FaCss3Alt className={styles.icon} title="CSS3" />
          <p>CSS3</p>
        </div>
        <div className={styles.skill}>
          <FaPython className={styles.icon} title="Python" />
          <p>Python</p>
        </div>
        <div className={styles.skill}>
          <FaJava className={styles.icon} title="Java" />
          <p>Java</p>
        </div>
        <div className={styles.skill}>
          <SiCplusplus className={styles.icon} title="C++" />
          <p>C++</p>
        </div>
      </div>
    </section>
  );
};
