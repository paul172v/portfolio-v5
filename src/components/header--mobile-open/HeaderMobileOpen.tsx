import React from "react";
import { Link } from "react-scroll";
import classes from "./HeaderMobileOpen.module.scss";

interface HeaderMobileOpenProps {
  onCloseMobileNav: () => void;
}

interface NavLinkData {
  name: string;
  anchor: string;
  offset: number;
}

const HeaderMobileOpen: React.FC<HeaderMobileOpenProps> = ({
  onCloseMobileNav,
}) => {
  const navLinks: NavLinkData[] = [
    { name: "Introduction", anchor: "anchor-introduction", offset: -780 },
    { name: "About", anchor: "anchor-about", offset: -835 },
    { name: "Projects", anchor: "anchor-projects", offset: -835 },
    { name: "Contact", anchor: "anchor-contact", offset: -800 },
  ];

  return (
    <header className={classes["header-mobile--open"]}>
      <div className={classes["u-row"]}>
        <button
          className={classes["btn-close-modal"]}
          onClick={onCloseMobileNav}
        >
          X
        </button>
      </div>
      <ul className={classes["nav-links-wrapper"]}>
        {navLinks.map(({ name, anchor, offset }) => (
          <Link
            key={anchor}
            offset={offset}
            to={anchor}
            smooth={true}
            duration={1000}
            onClick={onCloseMobileNav}
          >
            <li>
              <button className={classes["nav-link"]}>{name}</button>
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default HeaderMobileOpen;
