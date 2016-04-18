import React from "react";
import { IndexLink, Link } from "react-router";
import Radium from "radium";

import CenterButton from "./CenterButton";
import NavigationButton from "./NavigationButton";

class BottomNavigation extends React.Component {
  render() {

    // STYLES
    const styles = {
      base: {
        width: 520,
        height: 70,
        paddingTop: 5,
        margin: "60px auto 15px auto",
        position: "relative",
      }
    }

    return (
      <nav style = {styles.base}>
        <Link to = {`/${this.props.prev}`}>
          <NavigationButton position="left">Previous Project</NavigationButton>
        </Link>
        <Link to = {`/list`}>
          <CenterButton/>
        </Link>
        <Link to = {`/${this.props.next}`}>
          <NavigationButton position="right">Next Project</NavigationButton>
        </Link>
      </nav>
    );
  }
}


export default Radium(BottomNavigation);
