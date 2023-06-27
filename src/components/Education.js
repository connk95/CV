import React, { Component } from "react";
import "../App.css";

class Education extends Component {
  render() {
    return (
      <div id="educationInput">
        <form>
          <div>
            <input
              type="text"
              id="institution"
              placeholder="Institution"
            ></input>
            <br></br>
            <input
              type="text"
              id="qualification"
              placeholder="Qualification"
            ></input>
            <br></br>
            <input type="date" id="eduStart"></input>
            <br></br>
            <input type="date" id="eduEnd"></input>
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

export default Education;
