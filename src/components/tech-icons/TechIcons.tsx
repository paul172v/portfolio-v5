import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGithub,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiReactrouter,
  // SiSocketdotio,
  SiLeaflet,
  // SiRedux,
  SiJest,
} from "react-icons/si";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
// import { GrMysql } from "react-icons/gr";

import classes from "./TechIcons.module.scss";

const TechIcons = [
  { icon: <FaHtml5 className={classes.icon} />, label: "HTML5" },
  { icon: <FaCss3Alt className={classes.icon} />, label: "CSS3" },
  { icon: <IoLogoJavascript className={classes.icon} />, label: "JavaScript" },
  { icon: <FaSass className={classes.icon} />, label: "Sass" },
  { icon: <FaReact className={classes.icon} />, label: "React" },
  { icon: <SiReactrouter className={classes.icon} />, label: "React Router" },
  { icon: <SiLeaflet className={classes.icon} />, label: "Leaflet" },
  { icon: <SiTypescript className={classes.icon} />, label: "TypeScript" },
  { icon: <FaNode className={classes.icon} />, label: "Node.js" },
  { icon: <SiExpress className={classes.icon} />, label: "Express" },
  { icon: <SiMongodb className={classes.icon} />, label: "MongoDB" },
  { icon: <SiJest className={classes.icon} />, label: "Jest" },
  { icon: <FaGithub className={classes.icon} />, label: "GitHub" },
  {
    icon: (
      <img
        src="/icons/chatgpt.svg"
        alt="chatGPT"
        className={classes.icon}
        id={classes["chatGPT"]}
      />
    ),
    label: "ChatGPT",
  },
  { icon: <PiMagnifyingGlassDuotone className={classes.icon} />, label: "SEO" },
  { icon: <FaBootstrap className={classes.icon} />, label: "Bootstrap" },
  // { icon: <GrMysql className={classes.icon} />, label: "MySQL" },
  // { icon: <FaNpm />, label: 'npm' },
  // { icon: <SiRedux />, label: 'Redux' },
  // { icon: <TbBrandSocketIo />, label: 'Socket.io' },
];

export default TechIcons;
