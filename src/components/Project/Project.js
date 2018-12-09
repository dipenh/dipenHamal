import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.string
  })
};

const defaultProps = {};

const wrapProject = (project, content) => {
  if (!project.github_url && !project.external_url) {
    return <Link to={`/projects/${project.id}`}>{content}</Link>;
  }

  if (project.type === "github" && project.github_url) {
    return (
      <a target="_blank" href={project.github_url}>
        {content}
      </a>
    );
  }

  if (project.external_url) {
    return (
      <a target="_blank" href={project.external_url}>
        {content}
      </a>
    );
  }
};

function Project(props) {
  const { project } = props;

  if (!project.public) return null;

  const projectContent = (
    <div class="project-content">
      {project.type === "github" ? <small class="tag">Github</small> : null}

      {project.type === "app" ? <small class="app tag">App</small> : null}

      {project.type === "design" ? (
        <small class="design tag">Design</small>
      ) : null}

      <h2 class="project-title">{project.name}</h2>
      <small>{project.caption}</small>
    </div>
  );

  return (
    <div
      class="project"
      onClick={() => {
        if (typeof props.onClick === "function") {
          props.onClick(project);
        }
      }}
    >
      {project.background_image ? (
        <div
          class="project-image"
          style={{
            backgroundImage: `url(${project.background_image})`
          }}
        />
      ) : null}

      {props.onClick ? projectContent : wrapProject(project, projectContent)}
    </div>
  );
}

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;

export default Project;
