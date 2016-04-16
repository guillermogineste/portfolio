import React from "react";
import { IndexLink, Link } from "react-router";

import Navigation from "./Navigation";

class Header extends React.Component {
  render() {
    return (
        <header>
          <h1><IndexLink to="/" activeClassName="active">Guillermo Gineste</IndexLink> | Product Design - Branding</h1>
          <Navigation/>
          <hr></hr>
        </header>
    );
  }
}

export default Header;
