import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Menu from "Menu/Menu";
import Home from "Home/Home";
import Projects from "Projects/Projects";
import NotFound from "NotFound/NotFound";

export default class Container extends Component {
  render() {
    return (
      <div class="Portfolio site-content">
        <Menu />
        <section class="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="*" component={NotFound} />
          </Switch>
        </section>
      </div>
    );
  }
}
