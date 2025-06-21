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
            Pronounced like "sing-a"-song, I'm currently a Computer Science student in my last semester at Georgia Tech
            dedicated to finishing a double minor in Ocean Sciences & Industrial Design
            (how are all these interests related? I'm not sure yet!). 
            I'm always looking to learn new things so feel free to reach out with anything
            or to hear more about how I plan to successfuly intersect my skills!
              
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


