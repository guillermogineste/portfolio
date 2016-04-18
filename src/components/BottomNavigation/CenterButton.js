import React from "react";
import Radium from "radium";

class CenterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const styles = {
      button: {
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
        textAlign: "center",
        paddingTop: 10,
        ':hover': {}
      },
      icon: {
        display: "inline-block",
      },
      text: {
        color: "#424242",
        fontSize: 14,
        display: "block",
        marginTop: -10,
        visibility: "hidden",
        opacity: 0,
        transition: "opacity 100ms ease-in-out, margin-top 100ms ease-in-out",

        onButtonHover: {
          marginTop: 0,
          visibility: "visible",
          opacity: 1,
        }
      },
    }
    return (
      <div key = "buttonCenter" style = {styles.button}>
        <img style = {styles.icon} src="images/grid-icon.svg"></img>
        <span style = {Radium.getState(this.state, 'buttonCenter', ':hover') ? [styles.text, styles.text.onButtonHover] : styles.text}>All Projects</span>
      </div>
    );
  }
}

export default Radium(CenterButton);
