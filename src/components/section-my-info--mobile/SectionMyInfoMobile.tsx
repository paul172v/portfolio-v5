import React from "react";

import classes from "./SectionMyInfoMobile.module.scss";

const SectionMyInfoMobile: React.FC = () => {
  return (
    <section className={classes["section-my-info--mobile"]}>
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
    </section>
  );
};

export default SectionMyInfoMobile;
