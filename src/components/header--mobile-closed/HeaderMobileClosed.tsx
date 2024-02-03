import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import classes from "./HeaderMobileClosed.module.scss";

interface HeaderMobileClosedProps {
  onOpenMobileNav: () => void;
}

const HeaderMobileClosed: React.FC<HeaderMobileClosedProps> = ({
  onOpenMobileNav,
}) => (
  <header className={classes["header-mobile--closed"]}>
    <button className={classes["btn-open-modal"]} onClick={onOpenMobileNav}>
      <GiHamburgerMenu />
    </button>
  </header>
);

export default HeaderMobileClosed;
