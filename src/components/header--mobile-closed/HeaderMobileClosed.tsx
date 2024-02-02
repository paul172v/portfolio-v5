import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import classes from "./HeaderMobileClosed.module.scss";

const HeaderMobileClosed: React.FC<{ onOpenMobileNav: () => void }> = (
  props
) => {
  return (
    <header className={classes["header-mobile--closed"]}>
      <button
        className={classes["btn-open-modal"]}
        onClick={props.onOpenMobileNav}
      >
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default HeaderMobileClosed;
