import React, { useState } from "react";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("home");
  const [personal, setPersonal] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [jobs, setJobs] = useState([]);
  const [edus, setEdus] = useState([]);
  const [skills, setSkills] = useState([]);

  const retrieveData = () => {
    if (display === "personal") {
      setPersonal({
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
      });
      document.getElementById("name").value = "";
      document.getElementById("address").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
    } else if (display === "experience") {
      let job = {
        position: document.getElementById("position").value,
        company: document.getElementById("company").value,
        jobStart: document.getElementById("jobStart").value,
        jobEnd: document.getElementById("jobEnd").value,
      };
      setJobs((jobs) => [...jobs, job]);
      document.getElementById("position").value = "";
      document.getElementById("company").value = "";
      document.getElementById("jobStart").value = "";
      document.getElementById("jobEnd").value = "";
    } else if (display === "education") {
      let edu = {
        institution: document.getElementById("institution").value,
        qualification: document.getElementById("qualification").value,
        eduStart: document.getElementById("eduStart").value,
        eduEnd: document.getElementById("eduEnd").value,
      };
      setEdus((edus) => [...edus, edu]);
      document.getElementById("institution").value = "";
      document.getElementById("qualification").value = "";
      document.getElementById("eduStart").value = "";
      document.getElementById("eduEnd").value = "";
    } else if (display === "skills") {
      let skill = {
        skill: document.getElementById("skill").value,
        description: document.getElementById("description").value,
      };
      setSkills((skills) => [...skills, skill]);
      document.getElementById("skill").value = "";
      document.getElementById("description").value = "";
    } else {
      return;
    }
  };

  const handleExtraInfo = (e) => {
    e.preventDefault();
    retrieveData();
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (display === "home") {
      setDisplay("personal");
    } else if (display === "personal") {
      retrieveData();
      setDisplay("skills");
    } else if (display === "skills") {
      retrieveData();
      setDisplay("experience");
    } else if (display === "experience") {
      retrieveData();
      setDisplay("education");
    } else if (display === "education") {
      retrieveData();
      setDisplay("resume");
    } else {
      return;
    }
  };

  if (display === "home") {
    return (
      <div>
        <Home />
        <button className="continue" type="submit" onClick={handleContinue}>
          <span>Start</span>
        </button>
      </div>
    );
  } else if (display === "personal") {
    return (
      <div className="inputs">
        <Personal handleContinue={handleContinue} />
      </div>
    );
  } else if (display === "skills") {
    return (
      <div className="inputs">
        <Skills
          handleExtraInfo={handleExtraInfo}
          handleContinue={handleContinue}
        />
      </div>
    );
  } else if (display === "experience") {
    return (
      <div className="inputs">
        <Experience
          handleExtraInfo={handleExtraInfo}
          handleContinue={handleContinue}
        />
      </div>
    );
  } else if (display === "education") {
    return (
      <div className="inputs">
        <Education
          handleExtraInfo={handleExtraInfo}
          handleContinue={handleContinue}
        />
      </div>
    );
  } else if (display === "resume") {
    return (
      <div>
        <Resume
          name={personal.name}
          address={personal.address}
          email={personal.email}
          phone={personal.phone}
          jobs={jobs}
          edus={edus}
          skills={skills}
        />
      </div>
    );
  }
};

export default App;
