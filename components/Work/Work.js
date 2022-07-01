import React from "react";
import styles from "..//..//styles/Work.module.css";

const Work = () => {
  return (
    <div className={styles.work} id="projects">
      <div className={styles.title}>
        Our recent <span className={styles.colors}>Work</span>
        <div className={styles.description}>
          We love our residential design and build projects - big and small!
          From full builds, major renovations or a new lease of life to
          individual space!
        </div>

        <a href="/projects" className={styles.button}>View all Project</a>
      </div>
    </div>
  );
};

export default Work;
