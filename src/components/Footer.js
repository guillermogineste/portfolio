import React from "react";
import { IndexLink, Link } from "react-router";

class Footer extends React.Component {
  render() {
    const footerStyle = {
      textAlign: "center",
      fontSize: 14,
      paddingTop: 30,
      paddingBottom: 30,
    }
    return (
      <footer style = {footerStyle}>
        <p>Guillermo Gineste — <a className = "regular-link" href="mailto:nowhere@mozilla.org">guillermo.gineste@gmail.com</a></p>
      </footer>
    );
  }
}

export default Footer;
