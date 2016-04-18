import React from "react";

class CenterButton extends React.Component {
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
    const gridButtonStyle = {
      position: "absolute",
      left: "50%",
      transform: "translate(-50%)",
      textAlign: "center",
      paddingTop: 10,
    }
    const gridIcontStyle = {
      display: "inline-block",
    }
    const gridTextStyle = {
      color: "#424242",
      fontSize: 14,
      display: "block",
      marginTop: isHovering ? 0 : -10,
      visibility: isHovering ? "visible" : "hidden",
      opacity: isHovering ? 1 : 0,
      transition: "opacity 100ms ease-in-out, margin-top 100ms ease-in-out",
    }
    return (
      <div
        onClick = {this.handleClick.bind(this)}
        onMouseOver = {this.handleMouseOver.bind(this)}
        onMouseOut = {this.handleMouseOut.bind(this)}
        style = {gridButtonStyle}>
        <img style = {gridIcontStyle} src="images/grid-icon.svg"></img>
        <span style = {gridTextStyle}>All Projects</span>
      </div>
    );
  }
}

export default CenterButton;
