import React from "react";
import { IndexLink, Link } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
    children: React.PropTypes.node,
};

export default App;
