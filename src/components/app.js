import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import GridContainer from "./grid-container";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <GridContainer />
      </div>
    );
  }
}
