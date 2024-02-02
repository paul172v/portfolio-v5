import React from "react";
import { Element } from "react-scroll";

import classes from "./SectionAbout.module.scss";

const SectionAbout: React.FC = () => {
  return (
    <section className={classes["section-about"]}>
      <Element name="anchor-about" className="element">
        <h3>About Me</h3>
      </Element>
      <p>
        Hello there! I'm Paul, a passionate and self-taught web developer with
        three years of hands-on experience. I have a deep-rooted love for coding
        and am skilled in a range of technologies that span both front-end and
        back-end development.
      </p>

      <h3>Skills & Technologies</h3>
      <ul>
        <li>Front-end: HTML, CSS, JavaScript, React.js, TypeScript</li>
        <li>Back-end: Node.js</li>
        <li>
          Full Stack Applications: Proficient in building end-to-end web
          solutions
        </li>
        <li>AI: ChatGPT</li>
      </ul>

      <h3>Continuous Learning</h3>
      <p>
        I believe in lifelong learning and have recently expanded my skill set
        to include Node.js. I'm currently honing my abilities by creating
        full-stack applications that solve real-world problems. I am also
        working to improve my use of AI like ChatGPT, exploring the new features
        that ChatGPT 4 has introduced and learning better ways to write prompts.
        Lastly, I have recently begun using Brilliant.org to sharpen my math
        skills.
      </p>

      <h3>Availability & Flexibility</h3>
      <p>
        I'm actively seeking my first role in the industry and am available to
        start immediately. Open to both remote work and relocation, I'm flexible
        and willing to adapt to different work environments.
      </p>

      <h3>Let's Connect!</h3>
      <p>
        I'm eager to bring my dedication and technical skills to a dynamic team.
        If you're interested in collaborating or have any opportunities, feel
        free to contact me.
      </p>
    </section>
  );
};

export default SectionAbout;
