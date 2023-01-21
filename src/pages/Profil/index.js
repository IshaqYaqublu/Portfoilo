import React from "react";
import UserImg from "shared/media/img/Portfoilo.jpg";
import styles from "./Profil.module.scss";
import Typewriter from "typewriter-effect";

const Profil = () => {
  return (
    <div className={styles.Profil}>
      <img src={UserImg} alt="" width="175px" height="175px" />
      <h1>
        <Typewriter
          options={{
            strings: ["Yaqublu Ishaq"],
            autoStart: true,
            loop: true,
          }}
        />{" "}
      </h1>

      <p>Front-End Developer</p>
    </div>
  );
};

export default Profil;
