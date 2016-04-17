import React from "react";

class LeftButton extends React.Component {
  constructor() {
    super();

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
    const prevButtonStyle = {
      position: "absolute",
      padding: isHovering ? "9px 25px 8px 0" : "9px 15px 8px 0",
      transition: "padding 100ms ease-in-out 100ms",
    }
    const iconLeftStyleFirst = {
      position: "absolute",
      left: isHovering ? 0 : "45%",
      top: 14,
      transition: "left 100ms ease-in-out",
    }
    const iconLeftStyleSecond = {
      marginLeft: 8,
      visibility: isHovering ? "visible" : "hidden",
      opacity: isHovering ? 1 : 0,
      transition: "opacity 100ms ease-in-out 100ms, margin-top 100ms ease-in-out 100ms",
    }
    const textLeftStyle = {
      position: "relative",
      top: -2,
      color: "#424242",
      fontSize: 14,
      marginLeft: isHovering ? 15 : 25,
      visibility: isHovering ? "visible" : "hidden",
      opacity: isHovering ? 1 : 0,
      transition: "opacity 100ms ease-in-out 100ms, margin-left 100ms ease-in-out 100ms",
    }
    return (

          <div
            onClick = {this.handleClick.bind(this)}
            onMouseOver = {this.handleMouseOver.bind(this)}
            onMouseOut = {this.handleMouseOut.bind(this)}
            style = {prevButtonStyle}>
            <img style = {iconLeftStyleFirst} src="/images/prev-icon.svg"></img>
            <img style = {iconLeftStyleSecond} src="/images/prev-icon.svg"></img>
            <span style = {textLeftStyle}>Previous Project</span>
          </div>

    );
  }
}

export default LeftButton;
