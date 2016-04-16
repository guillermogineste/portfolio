import React from "react";
import { IndexLink, Link } from "react-router";

class Navigation extends React.Component {
  render() {
    const navigationStyle = {
      textAlign: "center",
      fontSize: 14,
      marginBottom: 60,
    };
    const navigationListStyle = {
      listStyle: "none",
      padding: 0,
      margin: 0,
    };
    const navigationSingleItemStyle = {
      display: "inline-block",
      marginRight: 15,
    };
    return (
      <nav style = {navigationStyle}>
        <ul style = {navigationListStyle}>
          <li style = {navigationSingleItemStyle}>
            <Link className="regular-link" to="/about" activeClassName="active">About Me</Link>
          </li>
          <li style = {navigationSingleItemStyle}>
            <Link className="regular-link" to="/list" activeClassName="active">List of Projects</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
