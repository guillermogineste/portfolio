import React from "react";
import { IndexLink, Link } from "react-router";

import Navigation from "./Navigation";

class Header extends React.Component {
  render() {
    // STYLES
    const colorRed = "rgba(238, 52, 11, 1)";
    const colorDarkGray = "#424242";

    const headerStyles = {
      width: 520,
      margin: "0 auto",
    };
    const mainHeadingStyle = {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "normal",
      fontSize: 16,
      textTransform: "uppercase",
      marginTop: 75,
      width: "100%",
      borderTop: `2px solid ${colorDarkGray}`,
      paddingTop: 60,
      marginBottom: 45,
    };
    const nameStyle = {
      position: "relative",
      borderTop: `2px solid ${colorRed}`,
      paddingTop: 60,
      color: colorRed,
      top: -2,
    };
    const jobStyle = {
      position: "relative",
      borderTop: `2px solid ${colorDarkGray}`,
      paddingTop: 60,
      paddingLeft: 15,
      top: -2,
    };
    const separatorStyle = {
      display: "inline-block",
      height: 20,
      width: 1,
      backgroundColor: colorRed,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: -4,
    };

    return (
        <header style = {headerStyles} >
          <h1 style = {mainHeadingStyle}>
            <span style = {nameStyle}>
              Guillermo Gineste
            </span>
            <span style = {jobStyle}>Product Design<span style = {separatorStyle}></span>Branding</span>
          </h1>
        </header>
    );
  }
}

export default Header;
