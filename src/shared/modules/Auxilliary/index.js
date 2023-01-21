import React from "react";
import styles from "./Auxilliary.module.scss";

const Aux = ({ children }) => {
  return <div className={styles.Aux}>{children}</div>;
};

export default Aux;
