import React from "react";
import { IndexLink, Link } from "react-router";
// https://github.com/misterfresh/react-easy-transition
import EasyTransition from 'react-easy-transition';


import Header from "../components/Header";
import Footer from "../components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <EasyTransition
          path={this.props.location.pathname}
          initialStyle={{opacity: 0}}
          transition="opacity 200ms ease-in-out"
          finalStyle={{opacity: 1}}
          leaveStyle={{opacity: 0}}
          >
          {this.props.children}
        </EasyTransition>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
