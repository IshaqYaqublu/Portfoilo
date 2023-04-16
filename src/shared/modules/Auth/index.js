import React from "react";
import styles from "./Auth.module.scss";

const Auth = ({ children }) => {
  return <div className={styles.Auth}>{children}</div>;
};

export default Auth;
