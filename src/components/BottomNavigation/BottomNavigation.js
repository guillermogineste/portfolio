import React from "react";
import { IndexLink, Link } from "react-router";

import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import CenterButton from "./CenterButton";

class BottomNavigation extends React.Component {
  render() {

    // STYLES
    const navigationStyle = {
      width: 520,
      height: 70,
      paddingTop: 5,
      margin: "60px auto 15px auto",
      position: "relative",
    }
    return (
      <nav style = {navigationStyle}>
        <Link to = {`/${this.props.prev}`}>
          <LeftButton/>
        </Link>
        <Link to = {`/list`}>
          <CenterButton/>
        </Link>
        <Link to = {`/${this.props.next}`}>
          <RightButton/>
        </Link>
      </nav>
    );
  }
}

export default BottomNavigation;
