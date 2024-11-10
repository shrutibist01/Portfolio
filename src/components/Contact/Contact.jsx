import React from "react";
import styles from "./Contact.module.css";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:shrutibist01@gmail.com">
            <FaEnvelope size={60} color="#4B9CD3" />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/shruti-bist-98b977253"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={60} color="#4B9CD3" />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://github.com/shrutibist01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={60} color="#4B9CD3" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
