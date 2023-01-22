import React from "react";
import Card from "shared/components/Card";
import { faCode, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.About}>
      <h1 className={styles.AboutTitle}>About Me</h1>
      <p className={styles.AboutDescription}>
        My name is Ishaq. I am 23 years old. I studied management with a
        bachelor's degree from Azerbaijan Technical University. I studied at
        Code Academy in 2022. I am currently working as a Front-End developer at
        Crocusoft.
        <br />
        <br />I am Front-end Developer. I learned and practiced different
        technologies and frameworks
      </p>
      <div className={styles.AboutCard}>
        <h2>What I'm Doing</h2>
        <div className={styles.AboutCardAll}>
          <Card
            icon={faCode}
            title="Web Development"
            description="High-quality development of sites at the professional level."
          />
          <Card
            icon={faPenToSquare}
            title="Web Design"
            description="The most modern and high-quality design made at a professional level."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
