import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";

import ProjectShowcase from "ProjectShowcase/ProjectShowcase";
import GlobalLoader from "GlobalLoader/GlobalLoader";
import Loader from "Loader/Loader";
import NotFound from "NotFound/NotFound";

import bannerImg from "images/mountEverest.jpg";
import profileImg from "images/dipen.jpg";

const getShowCaseProjects = ({ projects }) => {
  const projectsArray = [];
  Object.keys(projects).forEach(key =>
    projectsArray.push(Object.assign({ id: key }, projects[key]))
  );
  return projectsArray
    .filter(project => project.showcase)
    .sort((a, b) => a.order - b.order);
};

const PersonalInformation = ({ projects }) => {
  const showcaseProjects =
    isLoaded(projects) && !isEmpty(projects)
      ? getShowCaseProjects({ projects })
      : [];
  return (
    <div class="homepage">
      <div class="Index" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div class="IndexOverlay" />
        <div class="IndexContent">
          <small>
            Experienced software developer, creator and a wannabe entrepreneur.
            Currently contributing as a lead developer for{" "}
            <a target="_blank" href="https://pujaaaja.com">
              PujaAaja.com
            </a>{" "}
            , project for Krissho Studios.
            <br />
            <br /> You can contact me at{" "}
            <a href="mailto:dipen.hamal@gmail.com">hello@dipenhamal.com</a>
          </small>
          <div class="ProfileImage">
            <img src={profileImg} />
            <h2>Dipen Hamal</h2>
            <p>Experienced Software Engineer</p>
            <Link
              class="button orange"
              to="/projects"
              style={{
                marginTop: "3px",
                borderBottom: "none"
              }}
            >
              Download My CV <i class="icon-download" />
            </Link>
          </div>
        </div>
      </div>
      {showcaseProjects.length &&
        showcaseProjects.map(project => (
          <ProjectShowcase key={project.id} project={project} />
        ))}
      <div
        style={{
          padding: "5em 2em 7em",
          textAlign: "center",
          color: "white"
        }}
      >
        <p
          style={{
            color: "white",
            padding: "2em 0",
            fontSize: "1.15em"
          }}
        >
          Looking for a Full-Stack Developer / Mobile Application Developer?{" "}
          <br />
          Reach out to me at{" "}
          <a href="mailto:dipen.hamal@gmail.com">hello@dipenhamal.com</a>.
        </p>

        <Link
          class="button blue"
          to="/projects"
          style={{
            margin: "auto"
          }}
        >
          View All Projects <i class="icon-go" />
        </Link>
      </div>
    </div>
  );
};

const Home = ({ firebase, projects }) => {
  return (
    <div class="homepage">
      <PersonalInformation projects={projects} />
      {!isLoaded(projects) && <Loader />}
    </div>
  );
};

export default compose(
  firebaseConnect(props => [{ path: "projects" }]),
  connect(state => ({
    projects: state.firebase.data.projects
  }))
)(Home);
