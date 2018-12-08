import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

const defaultProps = {
  message: "Loading...",
  loading: true
};

class GlobalLoader extends Component {
  render() {
    const { message, loading } = this.props;
    if (!loading) return null;
    else {
      return <div class="GlobalLoader">{message}</div>;
    }
  }
}

GlobalLoader.propTypes = propTypes;
GlobalLoader.defaultProps = defaultProps;

export default GlobalLoader;
