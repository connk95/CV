import React from "react";
import "../App.css";

const Personal = ({ handleContinue }) => {
  return (
    <div id="personalInput">
      <form onSubmit={handleContinue}>
        <div>
          <input type="text" id="name" placeholder="Name" required></input>
          <br></br>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            required
          ></input>
          <br></br>
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            required
          ></input>
          <br></br>
          <input type="text" id="address" placeholder="Address"></input>
          <br></br>
          <button className="continue" type="submit">
            <span>Continue</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Personal;
