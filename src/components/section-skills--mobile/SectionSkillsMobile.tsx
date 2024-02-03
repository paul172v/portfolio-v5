import React from "react";
import TechIcons from "../tech-icons/TechIcons";
import classes from "./SectionSkillsMobile.module.scss";

interface IconWrapperProps {
  icon: React.ReactNode;
  label: string;
}

const SkillIcon: React.FC<IconWrapperProps> = ({ icon, label }) => (
  <div className={classes["icon-wrapper"]}>
    {icon}
    <p className={classes["icon-label"]}>{label}</p>
  </div>
);

const SectionSkillsMobile: React.FC = () => {
  return (
    <section className={classes["section-skills--mobile"]}>
      <div className={classes["skills-icons-box--mobile"]}>
        {TechIcons.map((data: IconWrapperProps, index: number) => (
          <SkillIcon key={index} icon={data.icon} label={data.label} />
        ))}
      </div>
    </section>
  );
};

export default SectionSkillsMobile;
