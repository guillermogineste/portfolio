import React from "react";
import { IndexLink, Link } from "react-router";

import Navigation from "./Navigation";

class Header extends React.Component {
  render() {
    var variables = {
      colorRed: "rgba(238, 52, 11, 1)",
      colorDarkGray: "#424242",
    };
    const styles = {
      // STYLES
      header: {
        width: 520,
        margin: "0 auto",
      },
      mainHeading: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "normal",
        fontSize: 16,
        letterSpacing: 1,
        textTransform: "uppercase",
        marginTop: 75,
        width: "100%",
        borderTop: `2px solid ${variables.colorDarkGray}`,
        paddingTop: 60,
        marginBottom: 45,
      },
      name: {
        position: "relative",
        borderTop: `2px solid ${variables.colorRed}`,
        paddingTop: 60,
        color: variables.colorRed,
        top: -2,
      },
      job: {
        position: "relative",
        borderTop: `2px solid ${variables.colorDarkGray}`,
        paddingTop: 60,
        paddingLeft: 15,
        top: -2,
        color: variables.colorDarkGray,
      },
      separator: {
        display: "inline-block",
        height: 20,
        width: 2,
        backgroundColor: variables.colorRed,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: -4,
      },
    }

    return (
        <header style = {styles.header} >
          <h1 style = {styles.mainHeading}>
            <span style = {styles.name}>
              Guillermo Gineste
            </span>
            <span style = {styles.job}>Product Design<span style = {styles.separator}></span>Branding</span>
          </h1>
        </header>
    );
  }
}

export default Header;
