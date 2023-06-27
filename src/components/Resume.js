import React, { Component } from "react";
import "../App.css";

class Resume extends Component {
  render() {
    return (
      <div id="resume">
        <div id="personal">
          <h1 className="display">{this.props.personalInfo.name}</h1>
          <p className="display">{this.props.personalInfo.address}</p>
          <p className="display">{this.props.personalInfo.phone}</p>
          <p className="display">{this.props.personalInfo.email}</p>
        </div>
        <div id="skills">
          <h2 className="display">Skills</h2>
          {this.props.skills.map((skill, index) => {
            return (
              <div key={`skill${index}`}>
                <div>
                  <h3 className="display">{skill.skill}</h3>
                  <p className="display">{skill.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div id="experience">
          <h2 className="display">Experience</h2>
          {this.props.jobs.map((job, index) => {
            return (
              <div key={`job${index}`}>
                <div className="titles">
                  <h3 className="display">{job.position}</h3>
                  <p className="display">{job.company}</p>
                </div>
                <div className="dates">
                  <p className="display">{job.jobStart}</p>
                  <p className="display">to {job.jobEnd}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div id="education">
          <h2 className="display">Education</h2>
          {this.props.edus.map((edu, index) => {
            return (
              <div key={`edu${index}`}>
                <div className="titles">
                  <h3 className="display">{edu.institution}</h3>
                  <p className="display">{edu.qualification}</p>
                </div>
                <div className="dates">
                  <p className="display">{edu.eduStart}</p>
                  <p className="display">to {edu.eduEnd}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Resume;
