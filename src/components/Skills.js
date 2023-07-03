import React from "react";
import "../App.css";

const Skills = ({ handleExtraInfo, handleContinue }) => {
  return (
    <div id="skillInput">
      <form onSubmit={handleContinue}>
        <div>
          <input type="text" id="skill" placeholder="Skill"></input>
          <br></br>
          <input type="text" id="description" placeholder="Description"></input>
          <br></br>
          <button className="add" id="add" onClick={handleExtraInfo}>
            <span>Add</span>
          </button>
          <button className="continue" type="submit">
            <span>Continue</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Skills;
