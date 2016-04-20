'use strict';
import React from "react";

class Clearfix extends React.Component {
  render() {
    const styles = {
      before: {
        display: 'table'
      },
      after: {
        clear: 'both'
      }
    }

    return (
      <div {...this.props}>
        <div style={styles.before}/>
        {this.props.children}
        <div style={styles.after}/>
      </div>
    );
  }
}

export default Clearfix;
