import React from "react";
import Radium from "radium";

class NavigationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var baseStyle = {
      button: {
        position: "absolute",
        transition: "padding 100ms ease-in-out 100ms",
      },
      iconFirst: {
        position: "absolute",
        top: 14,
      },
      iconSecond: {
        position: "absolute",
        top: 14,
        visibility: "hidden",
        opacity: 0,
        transition: "opacity 100ms ease-in-out 110ms",
      },
      text: {
        position: "relative",
        top: -2,
        color: "#424242",
        fontSize: 14,
        visibility: "hidden",
        opacity: 0,
      },
    }

    var stylesLeft = {
      button: {
        padding: "9px 15px 8px 0",
        ':hover': {
          padding: "9px 25px 8px 0",
        },
      },
      iconFirst: {
        left: "45%",
        transition: "left 100ms ease-in-out",

        onButtonHover: {
          left: 0,
        },
      },
      iconSecond: {
        left: 8,
        onButtonHover: {
          visibility: "visible",
          opacity: 1,
        },
      },
      text: {
        left: 15,
        transition: "opacity 100ms ease-in-out 100ms, margin-left 100ms ease-in-out 100ms",

        onButtonHover: {
          marginLeft:15,
          visibility:"visible",
          opacity: 1,
        },
      },
    }
    var stylesRight = {
      button: {
        right: 0,
        padding: "9px 0 8px 15px",
        ':hover': {
          padding: "9px 0 8px 25px",
        },
      },
      iconFirst: {
        right: "45%",
        transition: "right 100ms ease-in-out",
        transform: "rotate(180deg)",

        onButtonHover: {
          right: 0,
        },
      },
      iconSecond: {
        right: 8,
        transform: "rotate(180deg)",

        onButtonHover: {
          visibility: "visible",
          opacity: 1,
        },
      },
      text: {
        right: 15,
        transition: "opacity 100ms ease-in-out 100ms, margin-right 100ms ease-in-out 100ms",

        onButtonHover: {
          marginRight:15,
          visibility:"visible",
          opacity: 1,
        },
      },
    }

    const styles = this.props.position === "left" ? stylesLeft : stylesRight ;
    return (
          <div key = "button" style = {[baseStyle.button, styles.button]}>
            <img style = {
                // if "buttonLeft" state is :hover
                Radium.getState(this.state, 'button', ':hover') ?
                // add onButtonHover style
                [baseStyle.iconFirst, styles.iconFirst, styles.iconFirst.onButtonHover] :
                // else only use iconFirst
                [baseStyle.iconFirst, styles.iconFirst] }
                src = "images/prev-icon.svg">
            </img>
            <img style = {
                Radium.getState(this.state, 'button', ':hover') ?
                [baseStyle.iconSecond, styles.iconSecond, styles.iconSecond.onButtonHover] :
                [baseStyle.iconSecond, styles.iconSecond] }
                src = "images/prev-icon.svg">
            </img>
            <span style = {
                Radium.getState(this.state, 'button', ':hover') ?
                [baseStyle.text, styles.text, styles.text.onButtonHover] :
                [baseStyle.text, styles.text]}>
              {this.props.children}
            </span>
          </div>
    );
  }
}

export default Radium(NavigationButton);
