import React, { useState, useRef } from "react";
import { Link, Element } from "react-scroll";
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
import { GiHamburgerMenu } from "react-icons/gi";
// import { TbBrandSocketIo } from "react-icons/tb";

import classes from "./App.module.scss";

import ProjectCard from "./components/ProjectCard";

function App() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const [emailSentStatus, setEmailSentStatus] = useState("unsent"); //// unsent, sending
  const [showEmailMessage, setShowEmailMessage] = useState(false);
  const [emailMessageContent, setEmailMessageContent] = useState(
    "Something went wrong"
  );

  //// Refs
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  //// Functions
  const closeMobileNavHandler = () => {
    setMobileNavIsOpen(false);
  };

  const openMobileNavHandler = () => {
    setMobileNavIsOpen(true);
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSentStatus("sending");

    const currentName = nameRef?.current?.value;
    const currentEmail = emailRef?.current?.value;
    const currentSubject = subjectRef?.current?.value;
    const currentMessage = messageRef?.current?.value;

    if (!currentName || !currentEmail || !currentSubject || !currentMessage) {
      setEmailSentStatus("unsent");
      setShowEmailMessage(true);
      setEmailMessageContent("All fields must be completed!");
      return;
    }

    const emailFields = {
      name: currentName,
      email: currentEmail,
      subject: currentSubject,
      message: currentMessage,
    };

    try {
      const response = await fetch(
        "https://duke-of-gordon-menu-interface-d83c02c0eebd.herokuapp.com/api/v1/portfolio/send-email",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(emailFields),
        }
      );

      const data = await response.json();
      if (data.status === "fail") {
        setEmailSentStatus("unsent");
        setShowEmailMessage(true);
        setEmailMessageContent("Failed to send email, please try again later");
      } else if (data.status === "success") {
        setEmailSentStatus("unsent");
        setShowEmailMessage(true);
        setEmailMessageContent("Email sent successfully");
        setTimeout(() => {
          setShowEmailMessage(false);
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.background}>
      <div className={classes["frame-wrapper"]}>
        <div className={classes.frame}>
          {!mobileNavIsOpen && (
            <header className={classes["header-mobile--closed"]}>
              <button
                className={classes["btn-open-modal"]}
                onClick={openMobileNavHandler}
              >
                <GiHamburgerMenu />
              </button>
            </header>
          )}

          {mobileNavIsOpen && (
            <header className={classes["header-mobile--open"]}>
              <div className={classes["u-row"]}>
                <button
                  className={classes["btn-close-modal"]}
                  onClick={closeMobileNavHandler}
                >
                  X
                </button>
              </div>
              <ul className={classes["nav-links-wrapper"]}>
                <Link
                  offset={-785}
                  to="anchor-introduction"
                  smooth={true}
                  duration={1000}
                  onClick={closeMobileNavHandler}
                >
                  <li>
                    <button className={classes["nav-link"]}>
                      Introduction
                    </button>
                  </li>
                </Link>
                <Link
                  offset={-835}
                  to="anchor-about"
                  smooth={true}
                  duration={1000}
                  onClick={closeMobileNavHandler}
                >
                  <li>
                    <button className={classes["nav-link"]}>About</button>
                  </li>
                </Link>
                <Link
                  offset={-835}
                  to="anchor-projects"
                  smooth={true}
                  duration={1000}
                  onClick={closeMobileNavHandler}
                >
                  <li>
                    <button className={classes["nav-link"]}>Projects</button>
                  </li>
                </Link>
                <Link
                  offset={-815}
                  to="anchor-contact"
                  smooth={true}
                  duration={1000}
                  onClick={closeMobileNavHandler}
                >
                  <li>
                    <button className={classes["nav-link"]}>Contact</button>
                  </li>
                </Link>
              </ul>
            </header>
          )}

          <header className={classes.header}>
            <nav className={classes.nav}>
              <ul className={classes["nav-links-wrapper"]}>
                <Link
                  offset={-50}
                  to="anchor-about"
                  smooth={true}
                  duration={1000}
                >
                  <li>
                    <button className={classes["nav-link"]}>About</button>
                  </li>
                </Link>
                <Link
                  offset={-50}
                  to="anchor-projects"
                  smooth={true}
                  duration={1000}
                >
                  <li>
                    <button className={classes["nav-link"]}>Projects</button>
                  </li>
                </Link>
                <Link
                  offset={-50}
                  to="anchor-contact"
                  smooth={true}
                  duration={1000}
                >
                  <li>
                    <button className={classes["nav-link"]}>Contact</button>
                  </li>
                </Link>
              </ul>
            </nav>
          </header>
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
          <section className={classes["section-about"]}>
            <Element name="anchor-about" className="element">
              <h3>About Me</h3>
            </Element>
            <p>
              Hello there! I'm Paul, a passionate and self-taught web developer
              with three years of hands-on experience. I have a deep-rooted love
              for coding and am skilled in a range of technologies that span
              both front-end and back-end development.
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
              I believe in lifelong learning and have recently expanded my skill
              set to include Node.js. I'm currently honing my abilities by
              creating full-stack applications that solve real-world problems. I
              am also working to improve my use of AI like ChatGPT, exploring
              the new features that ChatGPT 4 has introduced and learning better
              ways to write prompts. Lastly, I have recently begun using
              Brilliant.org to sharpen my math skills.
            </p>

            <h3>Availability & Flexibility</h3>
            <p>
              I'm actively seeking my first role in the industry and am
              available to start immediately. Open to both remote work and
              relocation, I'm flexible and willing to adapt to different work
              environments.
            </p>

            <h3>Let's Connect!</h3>
            <p>
              I'm eager to bring my dedication and technical skills to a dynamic
              team. If you're interested in collaborating or have any
              opportunities, feel free to contact me.
            </p>
          </section>
          <section className={classes["section-projects"]}>
            <Element name="anchor-projects" className="element">
              <h3>Projects</h3>
            </Element>
            <div className={classes["projects-wrapper"]}>
              <ProjectCard
                photo="shutter-collective.png"
                title="Shutter Collective"
                liveSiteLink="https://shutter-collective.netlify.app/"
                liveSite2Link={null}
                liveSiteLabel={null}
                liveSite2Label={null}
                gitFrontLink="https://github.com/paul172v/shutter-collective"
                gitFront2Link={null}
                gitFrontLabel={null}
                gitFront2Label={null}
                gitBack={null}
                keyFeatures={[
                  "React.js",
                  "TypeScript",
                  "React-Scroll",
                  "SCSS",
                  "Responsive Design",
                  "Modal Gallery",
                ]}
                description="This is a basic single page website for a fictional photography group based in Glasgow, Scotland. It's not complicated but is responsive and uses simple components and props. It uses a library called react-scroll to scroll to various anchor points. This was a website I made after taking a sample introduction to TypeScript from a course covering a different topic."
                descriptionSize="normal"
              />

              <ProjectCard
                photo="view-menus.png"
                title="The View Online Menus"
                liveSiteLink="https://172v-view-online-menus.netlify.app/"
                liveSite2Link={null}
                liveSiteLabel={null}
                liveSite2Label={null}
                gitFrontLink="https://github.com/paul172v/view_menus"
                gitFront2Link={null}
                gitFrontLabel={null}
                gitFront2Label={null}
                gitBack="https://github.com/paul172v/view-backend-server"
                keyFeatures={[
                  "FullStack",
                  "React.js",
                  "Node.js",
                  "Responsive Design",
                  "Filter",
                  "SCSS",
                ]}
                description="This is an online menu for a restaurant, based on a real menu from a real restaurant. It gets all of the different menus as arrays from a backend and database shared with 'The View Interface' meaning the menu can be updated elsewhere. Once it gets the menu arrays the site will automatically generate itself based on the information it has thanks to conditional rendering and good use of components. This project is light on hooks but I have coded a filter that will only show menu items that meet selected dietary requirements."
                descriptionSize="normal"
              />

              <ProjectCard
                photo="view-interface.png"
                title="The View Interface Form"
                liveSiteLink="https://172v-view-interface-form.netlify.app/"
                liveSite2Link={null}
                liveSiteLabel={null}
                liveSite2Label={null}
                gitFrontLink="https://github.com/paul172v/view-menu-interface-form"
                gitFront2Link={null}
                gitFrontLabel={null}
                gitFront2Label={null}
                gitBack="https://github.com/paul172v/view-backend-server"
                keyFeatures={[
                  "FullStack",
                  "React.js",
                  "SCSS",
                  "Good use of Hooks and Props",
                  "Conditional Rendering",
                  "Node.js",
                  "Express",
                  "Mongoose",
                  "CRUD Operations",
                ]}
                description="This is the sister site of The View Online Menus. It is basically a giant form that will allow users to update the menu arrays on a database. This project made frequent use of useState, useReducer, useEffect, useRef, useContext and the usePortal hooks. As well as good use of components and props. The backend uses Express and Mongoose, does basic CRUD operations and also has some error handling and a handler factory to make the CRUD operations more streamlined. It uses over 20 models and the routes and controllers are divided between the main, kids and drinks menus. This was my first time making a 'proper' fullstack application but I am pleased with the results."
                descriptionSize="small"
              />
              <ProjectCard
                photo="dog-menu-interface.png"
                title="Duke of Gordon Menu/Interface"
                liveSiteLink="https://duke-of-gordon-menu-interface.netlify.app/"
                liveSite2Link="https://duke-of-gordon-menu.netlify.app/"
                liveSiteLabel="Live Site - Menu Interface"
                liveSite2Label="Live Site - Online Menu"
                gitFrontLink="https://github.com/paul172v/duke-of-gordon-menu-interface--frontend"
                gitFront2Link="https://github.com/paul172v/duke-of-gordon-menu"
                gitFrontLabel="GitHub - Menu Interface"
                gitFront2Label="GitHub - Online Menu"
                gitBack="https://github.com/paul172v/duke-of-gordon-menu-interface--backend"
                keyFeatures={[
                  "React.js",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "Mongoose",
                  "Responsive Design",
                  "Authentication",
                  "CRUD Operations",
                  "Keyframe Animations",
                ]}
                description="This is the first web app I made after taking a full TypeScript course. I was mainly getting used to declaring types in vanilla JS, React and Node with this project but interfaces came up a lot for declaring generic types. This app is otherwise pretty standard. I chose another menu & interface because I wanted to focus on getting used to TypeScript rather than figuring out a lot of logic or special features. 
                There is a bit of authentication with JSON Web Tokens, validation and error handling on both the front and back end and I used bcrypt to hash passwords. For the backend I added custom error handling and a  handler factory. For the frontend interface I used some keyframe animations for aesthetics and I used many of the fundamental hooks and conditional rendering for this project. The online menu is quite basic but that is because it is a recreation of a physical paper menu."
                descriptionSize="tiny"
              />
            </div>
          </section>
          <section className={classes["section-contact"]}>
            <Element name="anchor-contact" className="element">
              <h3>Contact</h3>
            </Element>
            <form onSubmit={submitHandler}>
              <label htmlFor="name">Sender Name:</label>
              <input type="text" name="name" ref={nameRef} />
              <label htmlFor="email">Sender Email:</label>
              <input type="email" name="email" ref={emailRef} />
              <label htmlFor="subject">Subject:</label>
              <input type="text" name="subject" ref={subjectRef} />
              <label htmlFor="message">Message:</label>
              <textarea name="message" ref={messageRef} />
              {emailSentStatus === "unsent" && (
                <input
                  id={classes["btn-send-email"]}
                  type="submit"
                  value="Send Email"
                />
              )}

              {emailSentStatus === "sending" && (
                <input
                  id={classes["btn-send-email--sending"]}
                  type=""
                  defaultValue="Sending"
                />
              )}
              {showEmailMessage === true && (
                <p className={classes["email-error-message"]}>
                  {emailMessageContent}
                </p>
              )}
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
