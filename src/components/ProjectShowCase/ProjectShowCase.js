import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    caption: PropTypes.string,
    external_url: PropTypes.string
  }).isRequired
};
const defaultProps = {};

function ProjectShowcase(props) {
  const { project } = props;

  return (
    <div class="ProjectShowcase">
      <div class="ProjectShowcase--overlay" />
      {project.background_image ? (
        <div
          style={{ backgroundImage: `url(${project.background_image})` }}
          class="ProjectShowcase--background"
        />
      ) : null}
      <div class="content">
        <div class="ProjectShowcase--info">
          <h1>{project.name}</h1>
          <hr />
          <p>{project.caption}</p>
        </div>

        {project.background_image ? (
          <img
            class="xs-device-image"
            src={project.background_image}
            style={{
              marginTop: "1em",
              marginBottom: "1em",
              borderRadius: "4px"
            }}
          />
        ) : null}

        <div class="margin-top-auto">
          {/herokuapp/gi.test(project.external_url) ? (
            <small class="note italic">
              (Heroku apps can take up to 30 seconds for the server to wake)
            </small>
          ) : null}

          {project.external_url ? (
            <a target="_blank" href={project.external_url}>
              View Project <i class="icon-go" />
            </a>
          ) : null}

          <p>
            Project Type: <strong class="capitalize">{project.type}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

ProjectShowcase.defaultProps = defaultProps;
ProjectShowcase.propTypes = propTypes;

export default ProjectShowcase;
