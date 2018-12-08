import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <section class="NotFound">
        <h1 ref="title">There is nothing interesting here !!!.</h1>
        <Link class="button" to="/">
          Please Go back!
        </Link>
      </section>
    );
  }
}
