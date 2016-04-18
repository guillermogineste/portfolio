import React from "react";

class RightButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
      isActive: false
    };
  }
  // Set this.state.isHovering to true on mouse over
  handleMouseOver () {
    this.setState({ isHovering: true });
  }
  // Set this.state.isHovering to false on mouse leave
  handleMouseOut () {
    this.setState({ isHovering: false });
  }
  // Toggle this.state.isActive on click
  handleClick () {
    var active = !this.state.isActive;
    this.setState({ isActive: active });
  }

  render() {
    const isHovering = this.state.isHovering;

    // STYLES
    const nextButtonStyle = {
      position: "absolute",
      right: 0,
      padding: "7px 0 8px 15px",
      padding: isHovering ? "9px 0 8px 25px" : "9px 0 8px 15px",
      transition: "padding 100ms ease-in-out 100ms",
    }
    const iconRightStyleFirst = {
      position: "absolute",
      right: isHovering ? 0 : "45%",
      top: 14,
      transition: "right 100ms ease-in-out",
    }
    const iconRightStyleSecond = {
      marginRight: 8,
      visibility: isHovering ? "visible" : "hidden",
      opacity: isHovering ? 1 : 0,
      transition: "opacity 100ms ease-in-out 100ms, margin-top 100ms ease-in-out 100ms",
    }
    const textRightStyle = {
      position: "relative",
      top: -2,
      color: "#424242",
      fontSize: 14,
      marginRight: isHovering ? 15 : 25,
      visibility: isHovering ? "visible" : "hidden",
      opacity: isHovering ? 1 : 0,
      transition: "opacity 100ms ease-in-out 100ms, margin-right 100ms ease-in-out 100ms",
    }
    return (
      <div
        onClick = {this.handleClick.bind(this)}
        onMouseOver = {this.handleMouseOver.bind(this)}
        onMouseOut = {this.handleMouseOut.bind(this)}
        style = {nextButtonStyle}>
        <span style = {textRightStyle}>Next Project</span>
        <img style = {iconRightStyleFirst} src="images/next-icon.svg"></img>
        <img style = {iconRightStyleSecond} src="images/next-icon.svg"></img>
      </div>
    );
  }
}

export default RightButton;
