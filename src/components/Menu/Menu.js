import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const propTypes = {
  active: PropTypes.string,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func
};

const defaultProps = {
  onOpen: () => {},
  onClose: () => {},
  onClick: () => {}
};

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  open() {
    this.setState(
      {
        open: true
      },
      () => this.props.onOpen()
    );
  }

  close() {
    this.setState(
      {
        open: false
      },
      () => this.props.onClose()
    );
  }

  toggle() {
    this.setState(
      {
        open: !this.state.open
      },
      () => {
        this.props[this.state.open ? "onOpen" : "onClose"]();
      }
    );
  }

  render() {
    return (
      <div class="Menu" onClick={() => this.toggle()}>
        <nav class={classNames({ open: this.state.open })}>
          <i id="MenuIcon" class="icon-rain" />
          <div class="nav-content">
            <div class="nav-menu">
              <menu class="navigation-menu hover-grow" type="toolbar">
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" activeClassName="active">
                    <span>Projects</span>
                  </NavLink>
                </li>
              </menu>
            </div>

            <div class="nav-menu">
              <menu class="social-links-menu compact small" type="toolbar">
                <a target="_blank" href="https://github.com/dipenh">
                  <i class="entypo-github" /> <span>/ Github</span>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/dipenh">
                  <i class="entypo-linkedin" /> <span>/ LinkedIn</span>
                </a>
              </menu>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
