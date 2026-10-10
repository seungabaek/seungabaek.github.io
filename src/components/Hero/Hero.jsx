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
            Pronounced like “sing-a”-song, I’m a product manager at IBM, 
            where I work on agentic AI for IBM Z mainframes. 
            I studied Computer Science at Georgia Tech with a double minor in Ocean Sciences 
            and Industrial Design (how are those related? I’m still figuring that out!). 
            I like building things as much as planning them, so feel free to reach out about anything, 
            or to hear what I’m working on next.
            
            P.S. I’m rebuilding this whole portfolio from scratch, with case studies that show more of my product work. Stay tuned!
              
        </p>
        <a href="mailto:iamseungabaek@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};


