import React, { Component } from "react";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      display: "home",
      personalInfo: {
        name: "",
        address: "",
        phone: "",
        email: "",
      },
      jobs: [],
      edus: [],
      skills: [],
    };
  }

  retrieveData = () => {
    if (this.state.display === "personal") {
      this.setState({
        personalInfo: {
          name: document.getElementById("name").value,
          address: document.getElementById("address").value,
          phone: document.getElementById("phone").value,
          email: document.getElementById("email").value,
        },
      });
      document.getElementById("name").value = "";
      document.getElementById("address").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
    } else if (this.state.display === "experience") {
      let job = {
        position: document.getElementById("position").value,
        company: document.getElementById("company").value,
        jobStart: document.getElementById("jobStart").value,
        jobEnd: document.getElementById("jobEnd").value,
      };
      this.state.jobs.push(job);
      document.getElementById("position").value = "";
      document.getElementById("company").value = "";
      document.getElementById("jobStart").value = "";
      document.getElementById("jobEnd").value = "";
    } else if (this.state.display === "education") {
      let edu = {
        institution: document.getElementById("institution").value,
        qualification: document.getElementById("qualification").value,
        eduStart: document.getElementById("eduStart").value,
        eduEnd: document.getElementById("eduEnd").value,
      };
      this.state.edus.push(edu);
      document.getElementById("institution").value = "";
      document.getElementById("qualification").value = "";
      document.getElementById("eduStart").value = "";
      document.getElementById("eduEnd").value = "";
    } else if (this.state.display === "skills") {
      let skill = {
        skill: document.getElementById("skill").value,
        description: document.getElementById("description").value,
      };
      this.state.skills.push(skill);
      document.getElementById("skill").value = "";
      document.getElementById("description").value = "";
    } else {
      return;
    }
  };

  handleExtraInfo = (e) => {
    e.preventDefault();
    this.retrieveData();
  };

  handleContinue = (e) => {
    e.preventDefault();
    if (this.state.display === "home") {
      this.setState({
        display: "personal",
      });
    } else if (this.state.display === "personal") {
      this.retrieveData();
      this.setState({
        display: "skills",
      });
    } else if (this.state.display === "skills") {
      this.retrieveData();
      this.setState({
        display: "experience",
      });
    } else if (this.state.display === "experience") {
      this.retrieveData();
      this.setState({
        display: "education",
      });
    } else if (this.state.display === "education") {
      this.retrieveData();
      this.setState({
        display: "resume",
      });
      document.querySelectorAll("p").forEach((e) => (e.style.color = "black"));
    } else {
      return;
    }
  };

  render() {
    const display = this.state.display;
    if (display === "home") {
      return (
        <div>
          <Home />
          <button
            className="continue"
            type="submit"
            onClick={this.handleContinue}
          >
            <span>Start</span>
          </button>
        </div>
      );
    } else if (display === "personal") {
      return (
        <div className="inputs">
          <Personal />
          <button
            className="continue"
            type="submit"
            onClick={this.handleContinue}
          >
            <span>Continue</span>
          </button>
        </div>
      );
    } else if (display === "skills") {
      return (
        <div className="inputs">
          <Skills handleExtraInfo={this.handleExtraInfo} />
          <button
            className="continue"
            type="submit"
            onClick={this.handleContinue}
          >
            <span>Continue</span>
          </button>
        </div>
      );
    } else if (display === "experience") {
      return (
        <div className="inputs">
          <Experience handleExtraInfo={this.handleExtraInfo} />
          <button
            className="continue"
            type="submit"
            onClick={this.handleContinue}
          >
            <span>Continue</span>
          </button>
        </div>
      );
    } else if (display === "education") {
      return (
        <div className="inputs">
          <Education handleExtraInfo={this.handleExtraInfo} />
          <button
            className="continue"
            type="submit"
            onClick={this.handleContinue}
          >
            <span>Finish</span>
          </button>
        </div>
      );
    } else if (display === "resume") {
      return (
        <div>
          <Resume {...this.state} />
        </div>
      );
    }
  }
}

export default App;
