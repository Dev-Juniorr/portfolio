import React from "react";
import styles from "..//..//styles/Header.module.css";
import { BiAtom } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaDev, FaTwitter } from "react-icons/fa";
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className={styles.background} id="portfolio">
        <header className={styles.header}>
          <div className={styles.logo}><BiAtom /></div>
          <div className={styles.menu}>
            <Link href="#portfolio" className={styles.item}>Portfolio</Link>
            <Link href="#experience" className={styles.item}>Experience</Link>
            <Link href="#projects" className={styles.item}>Projects</Link>
            <Link href="#contact" className={styles.item}>Contact</Link>
          </div>
          <div className={styles.name}>
            <Link href="https://github.com/Dev-Juniorr"><a><BsGithub/></a></Link>
            <Link href="https://dev.to/dev_juniorr"><a><FaDev/></a></Link>
            <Link href="https://twitter.com/Dev_Juniorr"><a><FaTwitter/></a></Link>
          </div>
        </header>

        <div className={styles.title}>Welcome to my <br/>
          <span className={styles.colors}> Portfolio!</span>

          <div className={styles.description}>
              {/* eslint-disable-next-line*/}
              Hi, I'm Joab Giraldo and I'm a Software Developer!
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
