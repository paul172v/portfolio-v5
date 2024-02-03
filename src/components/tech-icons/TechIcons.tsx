import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiReactrouter,
} from "react-icons/si";

import classes from "./TechIcons.module.scss";

const TechIcons = [
  { icon: <FaHtml5 className={classes.icon} />, label: "HTML5" },
  { icon: <FaCss3Alt className={classes.icon} />, label: "CSS3" },
  { icon: <IoLogoJavascript className={classes.icon} />, label: "JavaScript" },
  { icon: <FaSass className={classes.icon} />, label: "Sass" },
  { icon: <FaReact className={classes.icon} />, label: "React" },
  { icon: <SiReactrouter className={classes.icon} />, label: "React Router" },
  { icon: <SiTypescript className={classes.icon} />, label: "TypeScript" },
  { icon: <FaNode className={classes.icon} />, label: "Node.js" },
  { icon: <SiExpress className={classes.icon} />, label: "Express" },
  { icon: <SiMongodb className={classes.icon} />, label: "MongoDB" },
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
  // Uncomment or add other icons as needed
  // { icon: <FaNpm />, label: 'npm' },
  // { icon: <SiLeaflet />, label: 'Leaflet' },
  // { icon: <SiRedux />, label: 'Redux' },
  // { icon: <TbBrandSocketIo />, label: 'Socket.io' },
];

export default TechIcons;
