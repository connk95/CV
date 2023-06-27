import React, { Component } from "react";
import "../App.css";

class Experience extends Component {
  render() {
    return (
      <div id="jobInput">
        <form>
          <div>
            <input
              type="text"
              id="position"
              placeholder="Position"
              required
            ></input>
            <br></br>
            <input
              type="text"
              id="company"
              placeholder="Company"
              required
            ></input>
            <br></br>
            <input type="date" id="jobStart"></input>
            <br></br>
            <input type="date" id="jobEnd"></input>
            <br></br>
            <button
              className="add"
              id="add"
              onClick={this.props.handleExtraInfo}
            >
              <span>Add</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Experience;
