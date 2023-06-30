import React from "react";
import "../App.css";

const Experience = ({ handleExtraInfo }) => {
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
          <button className="add" id="add" onClick={handleExtraInfo}>
            <span>Add</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Experience;
