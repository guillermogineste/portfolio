import React from "react";
import { IndexLink, Link } from "react-router";

import ProjectCard from "../components/ProjectCard";
import Clearfix from "../components/Clearfix";
import PresentationText from "../components/PresentationText";

class List extends React.Component {
  render() {
    const projectsListStyle = {
      width: 703,
      margin: "0 auto",
    };
    return (
      <Clearfix>
        <PresentationText/>
        <div style = {projectsListStyle}>
          <ProjectCard
            featured = {true}
            position = ""
            linkTo = "first-test"
            name = "First Test"
            description = "This is a small project description"
            image = "http://lorempixel.com/703/240/"
            overlayColor = "rgba(0,26,88,0.70)" />
          <ProjectCard
            featured = {false}
            position = "left"
            linkTo = "second-test"
            name = "Second Test"
            description = "This is a small project description"
            image = "http://lorempixel.com/336/195/"
            overlayColor = "rgba(207,0,4,0.70)" />
          <ProjectCard
            featured = {false}
            position = "right"
            name = "Third Test"
            linkTo = "third-test"
            description = "This is a small project description"
            image = "http://lorempixel.com/336/195/"
            overlayColor = "rgba(0,232,180,0.70)" />
          <ProjectCard
            featured = {true}
            linkTo = "first-test"
            name = "First Test"
            description = "This is a small project description"
            image = "http://lorempixel.com/703/240/"
            overlayColor = "rgba(0,26,88,0.70)" />
          <ProjectCard
            featured = {false}
            name = "Third Test"
            linkTo = "third-test"
            description = "This is a small project description"
            image = "http://lorempixel.com/336/195/"
            overlayColor = "rgba(0,115,184,0.70)" />
          <ProjectCard
            featured = {false}
            position = "right"
            name = "Third Test"
            linkTo = "third-test"
            description = "This is a small project description"
            image = "http://lorempixel.com/336/195/"
            overlayColor = "rgba(255,85,0,0.70)" />
        </div>
      </Clearfix>
    );
  }
}

export default List;
