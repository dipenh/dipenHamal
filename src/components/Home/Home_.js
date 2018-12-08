import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProjectShowcase from "ProjectShowcase/ProjectShowcase";
import GlobalLoader from "GlobalLoader/GlobalLoader";
import img from "images/dipen.jpg";

const propTypes = {
  projects: PropTypes.object
};

const defaultProps = {
  projects: {}
};

export default class Home extends Component {
  render() {
    return (
      <div class="homepage">
        <GlobalLoader message="Loading Project Showcase..." loading={false} />
        <div class="Index" style={{ backgroundImage: `url(${img})` }}>
          <div class="rekt" />
          <div class="IndexOverlay" />
          <div class="IndexContent">
            <h2>Dipen Hamal</h2>
            <p>Full Stack Developer</p>

            <small>
              Experienced software developer, creator and a wannabe
              entrepreneur. Currently contributing as a lead developer for{" "}
              <a target="_blank" href="https://pujaaaja.com">
                PujaAaja.com
              </a>{" "}
              , project for Krissho Studios.
              <br />
              <br /> You can contact me at{" "}
              <a href="mailto:dipen.hamal@gmail.com">hello@dipenhamal.com</a>
            </small>
          </div>

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
      </div>
    );
  }
}
