import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shruti Bist</h1>
        <p className={styles.description}>
        Passionate Computer Science undergraduate and full-stack developer with hands-on experience in building scalable applications. Skilled in modern web technologies and driven by a love for innovation and problem-solving. Let’s work together to bring creative solutions to life!
        </p>
        <a href="mailto:shrutibist01@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/image.png" 
        alt="Hero img"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
