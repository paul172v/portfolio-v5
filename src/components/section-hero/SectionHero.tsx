import React from "react";
import { Element } from "react-scroll";
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

import classes from "./SectionHero.module.scss";

const SectionHero: React.FC = () => {
  return (
    <section className={classes.hero}>
      <Element name="anchor-introduction" className="element"></Element>
      <div className={classes["my-info-box"]}>
        <img className={classes.logo} src="background.png" alt="logo" />
        <h1>Paul Harris</h1>
        <h1>Fullstack MERN Developer</h1>
        <h2>Based in Scotland</h2>
        <h2>Available for Work</h2>
        <h2>Able to relocate</h2>
        <a
          href="https://github.com/paul172v"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/paul-harris-86677b1ba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn
        </a>
        {/* <a href="#">Send me an Email</a> */}
      </div>
      <div className={classes["skills-icons-box"]}>
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
      <img className={classes.avatar} src="/avatar.png" alt="avatar" />
    </section>
  );
};

export default SectionHero;
