import React from "react";
import { Element } from "react-scroll";
import TechIcons from "../tech-icons/TechIcons";
import classes from "./SectionHero.module.scss";

interface IconWrapperProps {
  icon: React.ReactNode;
  label: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, label }) => (
  <div className={classes["icon-wrapper"]}>
    {icon}
    <p className={classes["icon-label"]}>{label}</p>
  </div>
);

const SectionHero: React.FC = () => {
  return (
    <section className={classes.hero}>
      <Element name="anchor-introduction" className="element"></Element>
      <div className={classes["my-info-box"]}>
        <img
          className={classes.logo}
          src="background.png"
          alt="A phone and tablet sitting on a desk displaying a sleek website design."
        />
        <h1>Paul Harris</h1>
        <h1>Front End MERN Developer</h1>
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
      </div>
      <div className={classes["skills-icons-box"]}>
        {TechIcons.map((data: IconWrapperProps, index: number) => (
          <IconWrapper key={index} icon={data.icon} label={data.label} />
        ))}
        ;
      </div>
      <img
        className={classes.avatar}
        src="/avatar.png"
        alt="An illustrated image of Paul Harris."
      />
    </section>
  );
};

export default SectionHero;
