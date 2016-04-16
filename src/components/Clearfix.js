'use strict';
import React from "react";

class Clearfix extends React.Component {
  render() {
    const beforeStyle = {
      display: 'table'
    };

    const afterStyle = {
      clear: 'both'
    };

    return (
      <div {...this.props}>
        <div style={beforeStyle}/>
        {this.props.children}
        <div style={afterStyle}/>
      </div>
    );
  }
}

export default Clearfix;
