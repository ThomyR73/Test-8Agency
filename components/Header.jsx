import React from "react";
import styles from "../styles/header.module.scss";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";

const Header = ({ toggleMenuHandler }) => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.menuButton} onClick={toggleMenuHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={20}
            height={20}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span>menu</span>
        </div>
        <Scrollspy
          items={["purpleLogo", "contact"]}
          currentClassName={styles.activeLogo}
        >
          <img
            className={styles.logo}
            src="/Logo.png"
            alt="AIRhitect Purple Logo"
          />
          <img
            className={styles.logo}
            src="/WhiteLogo.png"
            alt="AIRhitect White Logo"
          />
        </Scrollspy>

        <Link to="contact" smooth={true} className={styles.contact}>
          <span></span>
          <span></span>contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
