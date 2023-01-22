import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Card.module.scss";

const Card = ({ title, description, icon }) => {
  return (
    <div className={styles.Card}>
      <FontAwesomeIcon icon={icon} />
      <div className={styles.CardText}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
