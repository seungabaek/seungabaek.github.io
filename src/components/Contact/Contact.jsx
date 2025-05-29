import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("email.svg")} alt="Email icon" /> 
          <a href="mailto:seungabaek@gatech.edu">seungabaek@gatech.edu</a>
        </li>
        <li className={styles.link}>
          <img 
            src={getImageUrl("linked.svg")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/seungabaek">linkedin.com/seungabaek</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("git.svg")} alt="Github icon" />
          <a href="https://www.github.com/seungabaek">github.com/seungabaek</a>
        </li>
      </ul>
    </footer>
  );
};
