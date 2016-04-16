import React from "react";
import { IndexLink, Link } from "react-router";

class List extends React.Component {
  render() {
    return (
      <div>
        <p>Please choose a project from the list below.</p>
        <ul>
          <li><Link to="/first-test">First Test Project</Link></li>
          <li><Link to="/second-test">Second Test Project</Link></li>
          <li><Link to="/third-test">Third Test Project</Link></li>
        </ul>
      </div>
    );
  }
}

export default List;
