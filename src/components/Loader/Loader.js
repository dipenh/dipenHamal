import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

class Loader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // return null;

    return (
      <div>
        <div class="Loader">
          <div class="a">
            <div class="dot" />
            <div class="dot" />
            <div class="dot" />
            <div class="dot" />
            <div class="dot" />
            <div class="dot" />
            <div class="dot" />
          </div>
          <div class="b">
            <div class="dotb" />
            <div class="dotb" />
            <div class="dotb" />
            <div class="dotb" />
            <div class="dotb" />
            <div class="dotb" />
            <div class="dotb" />
          </div>
        </div>

        <p>Loading Projects...</p>
      </div>
    );
  }
}

Loader.defaultProps = defaultProps;
Loader.propTypes = propTypes;

export default Loader;
