import React from "react";
import Radium from "radium";

class LeftButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const styles = {
      button: {
        position: "absolute",
        padding: "9px 15px 8px 0",
        transition: "padding 100ms ease-in-out 100ms",
        ':hover': {
          padding: "9px 25px 8px 0",
        },
      },
      iconFirst: {
        position: "absolute",
        left: "45%",
        top: 14,
        transition: "left 100ms ease-in-out",

        onButtonHover: {
          left: 0,
        },
      },
      iconSecond: {
        marginLeft: 8,
        visibility: "hidden",
        opacity: 0,
        transition: "opacity 100ms ease-in-out 110ms",

        onButtonHover: {
          visibility: "visible",
          opacity: 1,
        },
      },
      text: {
        position: "relative",
        top: -2,
        color: "#424242",
        fontSize: 14,
        marginLeft: 25,
        visibility: "hidden",
        opacity: 0,
        transition: "opacity 100ms ease-in-out 100ms, margin-left 100ms ease-in-out 100ms",

        onButtonHover: {
          marginLeft:15,
          visibility:"visible",
          opacity: 1,
        },
      },
    }
    return (
          <div key = "buttonLeft" style = {styles.button}>
            <img style = {Radium.getState(
                // if "buttonLeft" state is :hover
                this.state, 'buttonLeft', ':hover') ?
                // add onButtonHover style
                [styles.iconFirst, styles.iconFirst.onButtonHover] :
                // else only use iconFirst
                styles.iconFirst} src="images/prev-icon.svg"></img>
            <img style = {Radium.getState(
                this.state, 'buttonLeft', ':hover') ?
                [styles.iconSecond, styles.iconSecond.onButtonHover] :
                styles.iconSecond} src="images/prev-icon.svg"></img>
            <span style = {Radium.getState(this.state, 'buttonLeft', ':hover') ?
              [styles.text, styles.text.onButtonHover] :
              styles.text}>Previous Project</span>
          </div>
    );
  }
}

export default Radium(LeftButton);
