import React, { Component } from "react";
import { Form, FormProps } from "react-bootstrap";

import Grid18 from "./grid18";
import Grid24 from "./grid24";

export default class GridContainer extends Component {
  constructor() {
    super();
    this.state = {
      gridSelect: "",
      color: "#ffffff",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="workspace-container">
        <div className="selectors">
          <div className="grid-selection">
            <Form.Control
              as="select"
              custom
              name="gridSelect"
              placeholder="Select a Grid"
              value={this.state.gridSelect}
              onChange={this.handleChange}
            >
              <option value="null">Choose Your Grid</option>
              <option value="grid18">18 Squares Per Inch</option>
              <option value="grid24">24 Squares Per Inch</option>
            </Form.Control>
          </div>

          <div className="color-selection">
            <label htmlFor="exampleColorInput" className="form-label">
              Color picker
            </label>
            <input
              type="color"
              name="color"
              onChange={this.handleChange}
              id="exampleColorInput"
              value={this.state.color}
              title="Choose your color"
            />
          </div>
        </div>

        <div className="grid-container">
          {this.state.gridSelect === "grid18" ? (
            <Grid18 />
          ) : this.state.gridSelect === "grid24" ? (
            <Grid24 />
          ) : null}
        </div>
      </div>
    );
  }
}
