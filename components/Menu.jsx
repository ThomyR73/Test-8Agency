import React from "react";
import styles from "../styles/menu.module.scss";

import { Link } from "react-scroll";

const Menu = ({ activeMenu, toggleMenuHandler }) => {
  return (
    <nav className={`${styles.menu} ${activeMenu ? styles.activeMenu : ""}`}>
      <ul>
        <li>
          <Link to="home" smooth={true} onClick={toggleMenuHandler}>
            home
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} onClick={toggleMenuHandler}>
            works
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} onClick={toggleMenuHandler}>
            find us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
