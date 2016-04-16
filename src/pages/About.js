import React from "react";
import { IndexLink, Link } from "react-router";

import Navigation from "../components/Navigation";

class Project extends React.Component {
  render() {
    return (
      <div key="about">
        <Navigation/>
        <p>About Guillermo Gineste!</p>
      </div>
    )
  }
};

export default Project;
