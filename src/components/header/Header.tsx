import React from "react";
import { Link } from "react-scroll";

import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes["nav-links-wrapper"]}>
          <Link offset={-50} to="anchor-about" smooth={true} duration={1000}>
            <li>
              <button className={classes["nav-link"]}>About</button>
            </li>
          </Link>
          <Link offset={-50} to="anchor-projects" smooth={true} duration={1000}>
            <li>
              <button className={classes["nav-link"]}>Projects</button>
            </li>
          </Link>
          <Link offset={-50} to="anchor-contact" smooth={true} duration={1000}>
            <li>
              <button className={classes["nav-link"]}>Contact</button>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
