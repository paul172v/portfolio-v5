import React from "react";

import classes from "./ProjectCard.module.scss";

interface T {
  photo: string;
  title: string;
  liveSiteLink: string;
  liveSite2Link: string | null;
  liveSiteLabel: string | null;
  liveSite2Label: string | null;
  gitFrontLink: string;
  gitFront2Link: string | null;
  gitFrontLabel: string | null;
  gitFront2Label: string | null;
  gitBack: string | null;
  keyFeatures: string[];
  description: string;
  descriptionSize: string;
}

const ProjectCard: React.FC<T> = (props) => {
  return (
    <div className={classes.card}>
      <img
        className={classes.photo}
        src={`/screenshots/${props.photo}`}
        alt="website screenshot"
      />
      <h2>{props.title}</h2>
      {!props.liveSite2Link ? (
        <a href={props.liveSiteLink}>Live Site</a>
      ) : (
        <>
          <a href={props.liveSiteLink}>{props.liveSiteLabel}</a>
          <a href={props.liveSite2Link}>{props.liveSite2Label}</a>
        </>
      )}
      {!props.gitFront2Link ? (
        <a href={props.gitFrontLink}>GitHub Frontend</a>
      ) : (
        <>
          <a href={props.gitFrontLink}>{props.gitFrontLabel}</a>
          <a href={props.gitFront2Link}>{props.gitFront2Label}</a>
        </>
      )}
      {props.gitBack && <a href={props.gitBack}>GitHub Backend</a>}
      <p className={classes["u-bold"]}>Key Features:</p>
      <ul className={classes["key-features"]}>
        {props.keyFeatures.map((el) => (
          <li className={classes.li} key={el}>
            {el}
          </li>
        ))}
      </ul>
      <p
        className={
          props.descriptionSize === "normal"
            ? classes.description
            : props.descriptionSize === "small"
            ? classes["description-small"]
            : props.descriptionSize === "tiny"
            ? classes["description-tiny"]
            : classes.description
        }
      >
        {props.description}
      </p>
    </div>
  );
};

export default ProjectCard;
