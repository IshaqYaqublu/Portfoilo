import React from "react";
import { NavLink } from "react-router-dom";
import { mainButtons } from "./data";
import Profil from "pages/Profil";
import styles from "./SideMenu.module.scss";

const SideMenu = () => {
  return (
    <div className={styles.SideMenu}>
      <Profil />
      {mainButtons.map((item) => (
        <NavLink to={item.url} key={item?.id}>
          {item?.inner}
        </NavLink>
      ))}
    </div>
  );
};

export default SideMenu;
