import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGithub,
  // FaNpm,
  FaSass,
  // FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiReactrouter,
  // SiLeaflet,
  // SiRedux,
} from "react-icons/si";
// import { TbBrandSocketIo } from "react-icons/tb";

import classes from "./SectionSkillsMobile.module.scss";

const SectionSkillsMobile: React.FC = () => {
  return (
    <section className={classes["section-skills--mobile"]}>
      <div className={classes["skills-icons-box--mobile"]}>
        <div className={classes["icon-wrapper"]}>
          <FaHtml5 className={classes.icon} />
          <p className={classes["icon-label"]}>HTML</p>
        </div>
        <div className={classes["icon-wrapper"]}>
          <FaCss3Alt className={classes.icon} />
          <p className={classes["icon-label"]}>CSS</p>
        </div>
        <div className={classes["icon-wrapper"]}>
          <IoLogoJavascript className={classes.icon} />
          <p className={classes["icon-label"]}>JavaScript</p>
        </div>
        <div className={classes["icon-wrapper"]}>
          <FaSass className={classes.icon} />
          <p className={classes["icon-label"]}>SCSS</p>
        </div>
        <div className={classes["icon-wrapper"]}>
          <FaReact className={classes.icon} />
          <p className={classes["icon-label"]}>React.js</p>
        </div>
        {/* <div className={classes["icon-wrapper"]}>
        <SiLeaflet className={classes.icon} />
        <p className={classes["icon-label"]}>Leaflet.js</p>
      </div> */}
        <div className={classes["icon-wrapper"]}>
          <SiReactrouter className={classes.icon} />
          <p className={classes["icon-label"]}>React Router</p>
        </div>
        {/* <div className={classes["icon-wrapper"]}>
        <SiRedux className={classes.icon} />
        <p className={classes["icon-label"]}>Redux</p>
      </div> */}
        <div className={classes["icon-wrapper"]}>
          <SiTypescript className={classes.icon} />
          <p className={classes["icon-label"]}>TypeScript</p>
        </div>
        <div className={classes["icon-wrapper"]}>
          <FaNode className={classes.icon} />
          <p className={classes["icon-label"]}>Node.js</p>
        </div>
        <div className={classes["icon-wrapper"]}>
          <SiExpress className={classes.icon} />
          <p className={classes["icon-label"]}>Express</p>
        </div>
        <div className={classes["icon-wrapper"]}>
          <SiMongodb className={classes.icon} />
          <p className={classes["icon-label"]}>MongoDB</p>
        </div>
        <div className={classes["icon-wrapper"]}>
          <FaGithub className={classes.icon} />
          <p className={classes["icon-label"]}>GitHub</p>
        </div>
        {/* <div className={classes["icon-wrapper"]}>
        <FaNpm className={classes.icon} />
        <p className={classes["icon-label"]}>NPM</p>
      </div> */}
        <div className={classes["icon-wrapper"]}>
          <img
            src="/icons/chatgpt.svg"
            className={classes.icon}
            alt="chatGPT"
            id={classes.chatGPT}
          />
          <p className={classes["icon-label"]}>ChatGPT</p>
        </div>
        {/* <div className={classes["icon-wrapper"]}>
        <FaFigma className={classes.icon} />
        <p className={classes["icon-label"]}>Figma</p>
      </div> */}
        {/* <div className={classes["icon-wrapper"]}>
        <TbBrandSocketIo className={classes.icon} />
        <p className={classes["icon-label"]}>Socket.io</p>
      </div> */}
      </div>
    </section>
  );
};

export default SectionSkillsMobile;
