import React from "react";
import { IndexLink, Link } from "react-router";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/about" activeClassName="active">About Me</Link></li>
          <li><Link to="/list" activeClassName="active">List of Projects</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
