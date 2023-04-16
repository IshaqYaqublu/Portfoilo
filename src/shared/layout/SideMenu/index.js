import React from "react";
import styles from "./SideMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SIDE_URL } from "./data";
import { NavLink } from "react-router-dom";
import SideLogo from "shared/media/img/SideLogo.png";
const SideMenu = () => {
  return (
    <div className={`${styles.SideMenu} `}>
      <div className={styles.SideMenuLogo}>
        <img src={SideLogo} alt="LOGO" />
        <h1>Trans-Caspian International East-West Middle Corridor </h1>
      </div>
      <ul className={styles.SideMenuPage}>
        {SIDE_URL?.map((item) => (
          <li key={item?.id}>
            <NavLink to={item.url}>
              <span>{item?.icon} </span>
              {item?.inner}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
<FontAwesomeIcon icon="fa-regular fa-calendar-check" />;

export default SideMenu;
