import React from "react";
import { Link } from "react-scroll";

import classes from "./HeaderMobileOpen.module.scss";

const HeaderMobileOpen: React.FC<{ onCloseMobileNav: () => void }> = (
  props
) => {
  return (
    <header className={classes["header-mobile--open"]}>
      <div className={classes["u-row"]}>
        <button
          className={classes["btn-close-modal"]}
          onClick={props.onCloseMobileNav}
        >
          X
        </button>
      </div>
      <ul className={classes["nav-links-wrapper"]}>
        <Link
          offset={0}
          to="anchor-introduction"
          smooth={true}
          duration={1000}
          onClick={props.onCloseMobileNav}
        >
          <li>
            <button className={classes["nav-link"]}>Introduction</button>
          </li>
        </Link>
        <Link
          offset={0}
          to="anchor-about"
          smooth={true}
          duration={1000}
          onClick={props.onCloseMobileNav}
        >
          <li>
            <button className={classes["nav-link"]}>About</button>
          </li>
        </Link>
        <Link
          offset={0}
          to="anchor-projects"
          smooth={true}
          duration={1000}
          onClick={props.onCloseMobileNav}
        >
          <li>
            <button className={classes["nav-link"]}>Projects</button>
          </li>
        </Link>
        <Link
          offset={0}
          to="anchor-contact"
          smooth={true}
          duration={1000}
          onClick={props.onCloseMobileNav}
        >
          <li>
            <button className={classes["nav-link"]}>Contact</button>
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default HeaderMobileOpen;
