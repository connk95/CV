import React from "react";
import "../App.css";

const Resume = ({ name, address, email, phone, skills, jobs, edus }) => {
  return (
    <div id="resume">
      <div id="personal">
        <h1 className="display">{name}</h1>
        <p className="display">{address}</p>
        <p className="display">{phone}</p>
        <p className="display">{email}</p>
      </div>
      <div id="skills">
        <h2 className="display">Skills</h2>
        {skills.map((skill, index) => {
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
        {jobs.map((job, index) => {
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
        {edus.map((edu, index) => {
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
};

export default Resume;
