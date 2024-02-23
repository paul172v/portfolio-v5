import React from "react";
import classes from "./ProjectCard.module.scss";

interface ProjectCardProps {
  photo: string;
  title: string;
  liveSiteLink: string;
  liveSite2Link?: string | null;
  liveSiteLabel?: string | null;
  liveSite2Label?: string | null;
  gitFrontLink: string;
  gitFront2Link?: string | null;
  gitFrontLabel?: string | null;
  gitFront2Label?: string | null;
  gitBack?: string | null | undefined;
  keyFeatures: string[];
  description: string;
  descriptionSize: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  photo,
  title,
  liveSiteLink,
  liveSite2Link,
  liveSiteLabel,
  liveSite2Label,
  gitFrontLink,
  gitFront2Link,
  gitFrontLabel,
  gitFront2Label,
  gitBack,
  keyFeatures,
  description,
  descriptionSize,
}) => {
  const renderLink = (link: string, label: string) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );

  const getDescriptionClass = () => {
    switch (descriptionSize) {
      case "small":
        return classes["description-small"];
      case "tiny":
        return classes["description-tiny"];
      default:
        return classes.description;
    }
  };

  return (
    <div className={classes.card}>
      <img
        className={classes.photo}
        src={`/screenshots/${photo}`}
        alt={`${title} screenshot`}
      />
      <h2>{title}</h2>
      {liveSite2Link ? (
        <>
          {renderLink(liveSiteLink, liveSiteLabel || "Live Site")}
          {renderLink(liveSite2Link, liveSite2Label || "Live Site 2")}
        </>
      ) : (
        renderLink(liveSiteLink, "Live Site")
      )}
      {gitFront2Link ? (
        <>
          {renderLink(gitFrontLink, gitFrontLabel || "GitHub Front-End")}
          {renderLink(gitFront2Link, gitFront2Label || "GitHub Front-End 2")}
        </>
      ) : (
        renderLink(gitFrontLink, "GitHub Front-End")
      )}
      {gitBack && renderLink(gitBack, "GitHub Back-End")}
      <p className={classes["u-bold"]}>Key Features:</p>
      <ul className={classes["key-features"]}>
        {keyFeatures.map((feature, index) => (
          <li className={classes.li} key={index}>
            {feature}
          </li>
        ))}
      </ul>
      <p className={getDescriptionClass()}>{description}</p>
    </div>
  );
};

export default ProjectCard;
