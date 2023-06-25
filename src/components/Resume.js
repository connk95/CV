import React, { Component } from "react";
import "../App.css";

class Resume extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    console.log(this.props.jobs);

    return (
      <div id="resume">
        <div id="personal">
          <p>{this.props.personalInfo.name}</p>
        </div>
        <div id="skills"></div>
        <div id="experience">
          {this.props.jobs.map((job, index) => {
            return (
              <p key={`job${index}`}>
                {job.position}
                {job.company}
                {job.jobStart}
                {job.jobEnd}
              </p>
            );
          })}
        </div>
        <div id="education"></div>
      </div>
    );
  }
}

export default Resume;
