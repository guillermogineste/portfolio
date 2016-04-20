import React from "react";
import { IndexLink, Link } from "react-router";

class Navigation extends React.Component {
  render() {
    const styles = {
      navigation: {
        textAlign: "center",
        fontSize: 14,
        marginBottom: 60,
      },
      list: {
        listStyle: "none",
        padding: 0,
        margin: 0,
      },
      singleItem: {
        display: "inline-block",
        marginRight: 15,
      }
    }

    return (
      <nav style = {styles.navigation}>
        <ul style = {styles.list}>
          <li style = {styles.singleItem}>
            <Link className="regular-link" to="about" activeClassName="active">About Me</Link>
          </li>
          <li style = {styles.singleItem}>
            <Link className="regular-link" to="list" activeClassName="active">List of Projects</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
