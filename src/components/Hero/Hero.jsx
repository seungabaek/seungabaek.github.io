import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("grad.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          <img src={getImageUrl("Hi2.png")}
          alt="Image of me"
          />
        </h1>
        <p className={styles.description}>
            Pronounced like "sing-a"-song, I'm a 4th-year CS student with
            a double minor in Ocean Sciences & Industrial Design. 
            I'm a developer who loves exploring the intersection of design, technology, and creativity!
            I'm always learning, building, and finding 
            better ways to connect people with thoughtful, 
            user-centered solutions. Reach out if you'd like to learn more!
              
        </p>
        <a href="mailto:seungabaek@gatech.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};


