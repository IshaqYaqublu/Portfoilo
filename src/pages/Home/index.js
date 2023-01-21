import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <h1>
        Hello <span>and</span> welcome to <span>my Portfolio</span>
      </h1>
    </div>
  );
};

export default Home;
