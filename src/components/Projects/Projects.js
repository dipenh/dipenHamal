import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";

import Loader from "Loader/Loader";
import NotFound from "NotFound/NotFound";
import Project from "Project/Project";

const Projects = ({ firebase, projects }) => {
  if (!isLoaded(projects)) {
    return <Loader />;
  }
  if (isEmpty(projects)) {
    return <NotFound />;
  }
  const projectsArray = [];
  Object.keys(projects).forEach(key =>
    projectsArray.push(Object.assign({ id: key }, projects[key]))
  );

  return (
    <div class="Projects-container">
      <div class="projects">
        {projectsArray
          .sort((a, b) => a.type - b.type)
          .map(project => (
            <Project key={project.id} project={project} />
          ))}
      </div>
    </div>
  );
};

export default compose(
  firebaseConnect(props => [{ path: "projects" }]),
  connect(state => ({
    projects: state.firebase.data.projects
  }))
)(Projects);
