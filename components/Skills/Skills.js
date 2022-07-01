import React from 'react';
import styles from "..//..//styles/Skills.module.css";

import { BsGithub } from "react-icons/bs";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiPhp, SiMysql, SiNextdotjs, SiReact, SiRedux, SiBootstrap, SiTailwindcss, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd } from "react-icons/si";

const Skills = () => {
  return (
    <>
        <div className={styles.skills}>
            <div className={styles.iconSkills}><FaHtml5/></div>
            <div className={styles.iconSkills}><FaCss3Alt/></div>
            <div className={styles.iconSkills}><SiJavascript/></div>
            <div className={styles.iconSkills}><SiPhp/></div>
            <div className={styles.iconSkills}><SiMysql/></div>
            <div className={styles.iconSkills}><SiNextdotjs/></div>
            <div className={styles.iconSkills}><SiReact/></div>
            <div className={styles.iconSkills}><SiRedux/></div>
            <div className={styles.iconSkills}><SiBootstrap/></div>
            <div className={styles.iconSkills}><SiTailwindcss/></div>
            <div className={styles.iconSkills}><SiFigma/></div>
            <div className={styles.iconSkills}><SiAdobephotoshop/></div>
            <div className={styles.iconSkills}><SiAdobeillustrator/></div>
            <div className={styles.iconSkills}><SiAdobexd/></div>
        </div>
    </>
  )
}

export default Skills