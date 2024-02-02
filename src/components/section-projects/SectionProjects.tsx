import React from "react";
import { Element } from "react-scroll";

import classes from "./SectionProjects.module.scss";

import ProjectCard from "./project-card/ProjectCard";

const SectionProjects: React.FC = () => {
  return (
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
  );
};

export default SectionProjects;
