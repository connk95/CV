import React, { Component } from "react";
import "../App.css";

class Skills extends Component {
  render() {
    return (
      <div id="skillInput">
        <form>
          <div>
            <input type="text" id="skill" placeholder="Skill"></input>
            <br></br>
            <input
              type="text"
              id="description"
              placeholder="Description"
            ></input>
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

export default Skills;
