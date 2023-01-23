import * as React from "react";
import styles from "./Resume.module.scss";
import TimeLine from "shared/components/TimeLine";

export default function Resume() {
  return (
    <div className={styles.Resume}>
      <h1 className={styles.ResumeTitle}> Resume</h1>
      <TimeLine />
    </div>
  );
}
