import React, { ReactNode } from "react";
import { Element } from "react-scroll";
import classes from "./SectionAbout.module.scss";

interface SectionContentProps {
  title: string;
  children: ReactNode;
}

const SectionContent: React.FC<SectionContentProps> = ({ title, children }) => (
  <>
    <h3>{title}</h3>
    {children}
  </>
);

interface SectionData {
  title: string;
  content: ReactNode;
}

const aboutSections: SectionData[] = [
  {
    title: "About Me",
    content: (
      <p>
        Hello there! I'm Paul, a passionate and self-taught web developer with
        three years of hands-on experience. I have a deep-rooted love for coding
        and am skilled in a range of technologies that span both front-end and
        back-end development.
      </p>
    ),
  },
  {
    title: "Skills & Technologies",
    content: (
      <ul>
        <li>Front-end: HTML, CSS, JavaScript, React.js, TypeScript, SASS</li>
        <li>Back-end: Node.js, Express, Mongoose, Python</li>
        <li>
          Full Stack Applications: Proficient in building end-to-end web
          solutions
        </li>
        <li>Other Skills: GitHub, ChatGPT, SEO</li>
      </ul>
    ),
  },
  {
    title: "Continuous Learning",
    content: (
      <p>
        I believe in lifelong learning and have recently expanded my skill set
        to include Python, with the intention of later delving into machine
        learning and AI. I'm currently honing my abilities by creating
        full-stack applications that solve real-world problems. I am also
        consistently working to improve my understanding and expertise with AI
        tools like ChatGPT. I have a taken a course which explains a little
        about how LLMs work under the hood, effective chat prompting techniques,
        and am always experiment with the latest tools like AI agents, image
        generation and sora and incorporating them into my daily activities and
        projects.
      </p>
    ),
  },
  {
    title: "Availability & Flexibility",
    content: (
      <p>
        I'm actively seeking my first role in the industry and am available to
        start within one month's notice. Open to both remote work and
        relocation, I'm flexible and willing to adapt to different work
        environments.
      </p>
    ),
  },
  {
    title: "Let's Connect!",
    content: (
      <p>
        I'm eager to bring my dedication and technical skills to a dynamic team.
        If you're interested in collaborating or have any opportunities, feel
        free to contact me.
      </p>
    ),
  },
  // Add other sections here...
];

const SectionAbout: React.FC = () => {
  return (
    <section className={classes["section-about"]}>
      <Element name="anchor-about" className="element">
        {aboutSections.map((section, index) => (
          <SectionContent key={index} title={section.title}>
            {section.content}
          </SectionContent>
        ))}
      </Element>
    </section>
  );
};

export default SectionAbout;
