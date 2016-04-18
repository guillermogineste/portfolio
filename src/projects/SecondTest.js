import React from "react";
import { IndexLink, Link } from "react-router";

import BottomNavigation from "../components/BottomNavigation/BottomNavigation"

class SecondTest extends React.Component {
  render() {
    return (
        <div>
          <p>This is the second test project</p>
          <BottomNavigation next = "" prev = ""/>
        </div>
    );
  }
}

export default SecondTest;
