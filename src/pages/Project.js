import React from "react";
import { IndexLink, Link } from "react-router";

import Navigation from "../components/Navigation";

import FirstTest from "../projects/FirstTest";
import SecondTest from "../projects/SecondTest";
import ThirdTest from "../projects/ThirdTest";

class Project extends React.Component {
  renderProject() {
    const projects = {
      "first-test": {
        name: "First Test",
        component: <FirstTest/>
      },
      "second-test": {
        name: "Second Test",
        component: <SecondTest/>
      },
      "third-test": {
        name: "Third Test",
        component: <ThirdTest/>
      },
    };

    let projectName = this.props.params.projectName;
    let projectComponent = projects[projectName].component;
    return projectComponent
  }
  render() {
    return (

      <div key={this.props.params.projectName}>
        <Navigation/>
        {this.renderProject()}
      </div>
    )
  }
};

export default Project;
