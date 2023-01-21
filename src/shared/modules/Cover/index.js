import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Cover.module.scss";

const Cover = ({ children }) => {
  return (
    <>
      <div className={styles.cover}>{children}</div>
    </>
  );
};

export default Cover;
