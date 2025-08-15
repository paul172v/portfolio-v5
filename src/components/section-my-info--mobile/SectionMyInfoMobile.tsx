import React from "react";
import classes from "./SectionMyInfoMobile.module.scss";

type TagName = keyof JSX.IntrinsicElements;

const personalInfo = [
  { type: "h1" as TagName, text: "Paul Harris" },
  { type: "h1" as TagName, text: "Full Stack MERN Developer" },
  { type: "h2" as TagName, text: "Based in Scotland" },
  { type: "h2" as TagName, text: "Available for Work" },
  { type: "h2" as TagName, text: "Able to relocate" },
];

const links = [
  { href: "https://github.com/paul172v", text: "My GitHub" },
  {
    href: "https://www.linkedin.com/in/paul-harris-86677b1ba/",
    text: "My LinkedIn",
  },
  { href: "mailto:admin@paul172v-portfolio.co.uk", text: "Email Me" },
];

const SectionMyInfoMobile: React.FC = () => {
  return (
    <section className={classes["section-my-info--mobile"]}>
      {personalInfo.map((info, index) => {
        const Tag: TagName = info.type;
        return <Tag key={index}>{info.text}</Tag>;
      })}
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.text}
        </a>
      ))}
    </section>
  );
};

export default SectionMyInfoMobile;
