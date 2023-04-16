import React from "react";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { SIDE_URL } from "shared/layout/SideMenu/data";
import { NotificationBing } from "shared/components/Icons";
import Profil from "shared/media/img/profil.jpg";

const Header = () => {
  const { pathname } = useLocation();
  const urls = SIDE_URL?.filter((item) => item?.url === pathname);
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderLeft}>{urls[0]?.inner}</div>
      <div className={styles.HeaderRight}>
        <Link to={"/home"}>
          <div className={styles.HeaderRightNotfication}>
            <NotificationBing />
          </div>
        </Link>
        <div className={styles.HeaderRightProfil}>
          <img role="button" src={Profil} alt="photos" />
          <div className={styles.HeaderRightProfilName}>
            <h1>Yaqublu Ishaq</h1>
            <p>Azerbaijan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
