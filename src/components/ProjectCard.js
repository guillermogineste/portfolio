import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";

class ProjectCard extends React.Component {
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

  // Fade in component after is mounted
  componentDidMount () {
    // Get the components DOM node
    var elem = ReactDOM.findDOMNode(this);
    // Set the opacity of the element to 0
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
        // Now set a transition on the opacity
        elem.style.transition = "opacity 1000ms";
        // and set the opacity to 1
        elem.style.opacity = 1;
    });
  }

  render() {
    // STYLES
    const featured = this.props.featured;
    const isHovering = this.state.isHovering;
    const position = this.props.position;

    const cardStyle = {
      position: "relative",
      width: featured ? 703 : 336,
      height: featured ? 240 : 195,
      marginBottom: 30,
      marginLeft: position === "right" ? 30 : 0,
      float: "left",
    }
    const cardLinkStyle = {
      border: "none",
    }
    const textBoxStyle = {
      position: "absolute",
      height: isHovering ? featured ? 180 : 135 : 60,
      transition: "height 50ms ease-in-out",
      paddingTop: 30,
      paddingLeft: 30,
      paddingRight: 30,
      left: 30,
      right: 30,
      bottom: 0,
      backgroundColor: "rgba(255,255,255,0.92)",
      zIndex: 10,
    }
    const titleStyle = {
      display: "inline-block",
      marginBottom: 15,
      color: "#424242",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "normal",
      fontSize: 14,
      textTransform: "uppercase",
      fontWeight: 600,
    }
    const lineStyle = {
      display: "inline-block",
      width: 40,
      height: 2,
      backgroundColor: "#424242",
      marginLeft: 15,
      marginBottom: 4,
    }
    const descriptionStyle = {
      visibility: isHovering ? "visible" : "hidden",
      opacity: isHovering ? 1 : 0,
      transition: "opacity 200ms ease-in-out",
      transitionDelay: 0.09,
      color: "#5C5C5C",
      fontSize: 14,
    }
    const overlayStyle = {
      position: "absolute",
      backgroundColor: this.props.overlayColor,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 5,
    }

    if (featured){
      var image = <img src={this.props.image} width={703} height={240}></img>;
    } else {
      var image = <img src={this.props.image} width={336} height={195}></img>;
    }
    return (
        <div
          style = {cardStyle}
          onClick = {this.handleClick.bind(this)}
          onMouseOver = {this.handleMouseOver.bind(this)}
          onMouseOut = {this.handleMouseOut.bind(this)} >
          <Link style = {cardLinkStyle} to = {`/${this.props.linkTo}`}>
            <div style = {textBoxStyle}>
              <div style = {titleStyle}>{this.props.name}</div>
              <span style = {lineStyle}></span>
              <div style = {descriptionStyle}>{this.props.description}</div>
            </div>
            <div style={overlayStyle}></div>
            {image}
          </Link>
        </div>
    );
  }
}

export default ProjectCard;
