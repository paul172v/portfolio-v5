import { useState } from "react";

// import { TbBrandSocketIo } from "react-icons/tb";

import classes from "./App.module.scss";

import HeaderMobileClosed from "./components/header--mobile-closed/HeaderMobileClosed";
import HeaderMobileOpen from "./components/header--mobile-open/HeaderMobileOpen";
import Header from "./components/header/Header";
import SectionHero from "./components/section-hero/SectionHero";
import SectionMyInfoMobile from "./components/section-my-info--mobile/SectionMyInfoMobile";
import SectionSkillsMobile from "./components/section-skills--mobile/SectionSkillsMobile";
import SectionAbout from "./components/section-about/SectionAbout";
import SectionProjects from "./components/section-projects/SectionProjects";
import SectionContact from "./components/section-contact/SectionContact";

function App() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  //// Functions
  const closeMobileNavHandler = () => {
    setMobileNavIsOpen(false);
  };

  const openMobileNavHandler = () => {
    setMobileNavIsOpen(true);
  };

  return (
    <div className={classes.background}>
      <div className={classes["frame-wrapper"]}>
        <div className={classes.frame}>
          {!mobileNavIsOpen && (
            <HeaderMobileClosed onOpenMobileNav={openMobileNavHandler} />
          )}

          {mobileNavIsOpen && (
            <HeaderMobileOpen onCloseMobileNav={closeMobileNavHandler} />
          )}

          <Header />
          <SectionHero />
          <SectionMyInfoMobile />
          <SectionSkillsMobile />
          <SectionAbout />
          <SectionProjects />
          <SectionContact />
        </div>
      </div>
    </div>
  );
}

export default App;
