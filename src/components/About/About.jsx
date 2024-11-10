import React from "react";
import { FaLaptopCode, FaDatabase, FaBullhorn } from "react-icons/fa";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <FaLaptopCode size={40} color="#4B9CD3" className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I am a Full Stack Developer with hands-on experience in building web applications using React, Node.js, Express, and databases like MongoDB. I focus on creating seamless user experiences and developing both the front and back-end of applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FaDatabase size={40} color="#4B9CD3" className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Database Management</h3>
              <p>
                I have strong experience in designing and managing databases, optimizing queries, and integrating database management systems like MySQL, MongoDB, and PostgreSQL with web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FaBullhorn size={40} color="#4B9CD3" className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Project Management & Collaboration</h3>
              <p>
                Enthusiastic about team collaboration, I have successfully contributed to multiple projects, using agile methodologies and communication tools to deliver results. I am passionate about learning and sharing knowledge with peers in a collaborative setting.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
