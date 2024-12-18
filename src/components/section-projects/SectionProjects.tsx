import React from "react";
import { Element } from "react-scroll";
import classes from "./SectionProjects.module.scss";
import ProjectCard from "./project-card/ProjectCard";
import { projectsData } from "./projects-data/projects-data";

interface IProject {
  id: React.Key;
  photo: string;
  title: string;
  liveSiteLink: string;
  liveSite2Link?: string | null;
  liveSiteLabel?: string | null;
  liveSite2Label?: string | null;
  gitFrontLink: string | null;
  gitFront2Link?: string | null;
  gitFrontLabel?: string | null;
  gitFront2Label?: string | null;
  gitBack?: string | null | undefined;
  keyFeatures: string[];
  description: string;
  descriptionSize: string;
}

const SectionProjects = () => {
  return (
    <section className={classes["section-projects"]}>
      <Element name="anchor-projects" className="element">
        <h3>Projects</h3>
      </Element>
      <div className={classes["projects-wrapper"]}>
        {projectsData.map((project: IProject) => (
          <ProjectCard
            key={project.id}
            photo={project.photo}
            title={project.title}
            liveSiteLink={project.liveSiteLink}
            liveSite2Link={project.liveSite2Link}
            liveSiteLabel={project.liveSiteLabel}
            liveSite2Label={project.liveSite2Label}
            gitFrontLink={project.gitFrontLink}
            gitFront2Link={project.gitFront2Link}
            gitFrontLabel={project.gitFrontLabel}
            gitFront2Label={project.gitFront2Label}
            gitBack={project.gitBack}
            keyFeatures={project.keyFeatures}
            description={project.description}
            descriptionSize={project.descriptionSize}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionProjects;
