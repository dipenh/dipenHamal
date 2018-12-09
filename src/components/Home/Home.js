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
import profileImg from "images/dipen.png";

const getShowCaseProjects = ({ projects }) => {
  const projectsArray = [];
  Object.keys(projects).forEach(key =>
    projectsArray.push(Object.assign({ id: key }, projects[key]))
  );
  return projectsArray
    .filter(project => project.showcase)
    .sort((a, b) => a.order - b.order);
};

const Profile = () => {
  return (
    <div class="ProfileImage">
      <img src={profileImg} />
      <h2>Dipen Hamal</h2>
      <p>Experienced Software Engineer</p>
      <a
        class="button orange"
        target="_blank"
        href="https://drive.google.com/file/d/1XjtfMnLRF1v4vL7umH6-q10b320De232/view?usp=sharing"
        style={{ marginTop: "3px", borderBottom: "none" }}
      >
        Download My CV <i class="icon-download" />
      </a>
      <a
        class="button blue"
        href="mailto:dipen.hamal@gmail.com"
        style={{ marginTop: "-8px", borderBottom: "none" }}
      >
        Contact Me <i class="entypo-email" />
      </a>
    </div>
  );
};

const Skill = ({ title, skills }) => {
  return (
    <div
      style={{
        margin: "20px"
      }}
    >
      <h2 style={{ fontSize: "1.5em", color: "#66b7ff" }}>{title}</h2>
      {skills.map((skill, index) => (
        <p style={{ textAlign: "center", color: "#c7c7c7" }} key={index}>
          {index == skills.length - 1 ? (
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dipenh"
              style={{ borderBottom: "none", color: "#66b7ff" }}
            >
              {skill}
            </a>
          ) : (
            skill
          )}
        </p>
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Skill
        title="Key Competencies"
        skills={[
          "Responsibility",
          "Teamwork",
          "Decision Making",
          "Communication",
          "Problem Solving",
          "Technical Skills",
          "& More ..."
        ]}
      />
      <Skill
        title="Tech Skills"
        skills={[
          "React",
          "ReactNative",
          "Java",
          "Javascript",
          "REST",
          "CMS",
          "& More..."
        ]}
      />

      <Skill
        title="Experience"
        skills={[
          "Agile Application Development",
          "Full-Stack Development",
          "Mobile Application Development",
          "Project Management",
          "& More..."
        ]}
      />
    </div>
  );
};

const PersonalInformation = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <small>
        <p>Helsinki based software developer</p>
        <p>Creator</p>
        <p>Entrepreneur</p>
        Currently working on a personal project{" "}
        <a target="_blank" href="https://pujaaaja.com">
          PujaAaja.com
        </a>{" "}
        , project for Krissho Studios. <br />
      </small>{" "}
      <Profile />
    </div>
  );
};

const HireMe = () => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "white"
      }}
    >
      <p
        style={{
          color: "white",
          padding: "1em 0em 2em",
          fontSize: "1.15em"
        }}
      >
        Looking to hire or just want to say hello? <br />
        Reach out to me at{" "}
        <a href="mailto:dipen.hamal@gmail.com">dipen.hamal@gmail.com</a>.
      </p>
    </div>
  );
};
const Showcase = ({ projects }) => {
  if (!isLoaded(projects)) return <Loader />;
  const showcaseProjects = !isEmpty(projects)
    ? getShowCaseProjects({ projects })
    : [];
  if (showcaseProjects.length) {
    return (
      <div>
        {showcaseProjects.map(project => (
          <ProjectShowcase key={project.id} project={project} />
        ))}
        <Link
          class="button blue"
          to="/projects"
          style={{
            marginTop: "4em"
          }}
        >
          View All Projects <i class="icon-go" />
        </Link>
      </div>
    );
  }
  return null;
};

const Home = ({ firebase, projects }) => {
  return (
    <div class="homepage">
      <div class="Index" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div class="IndexOverlay" />
        <div class="IndexContent">
          <PersonalInformation />
          <Skills />
        </div>
      </div>
      <Showcase projects={projects} />
      <HireMe />
    </div>
  );
};

export default compose(
  firebaseConnect(props => [{ path: "projects" }]),
  connect(state => ({
    projects: state.firebase.data.projects
  }))
)(Home);
