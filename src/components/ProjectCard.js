import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import Radium from "radium";

class ProjectCard extends React.Component {
  constructor() {
    super();
    this.state = {
    };
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
    var variables = {
      colorRed: "rgba(238, 52, 11, 1)",
      colorLightGray: "#5C5C5C",
      colorDarkGray: "#424242",
      colorBackgroundWhite: "rgba(255,255,255,0.92)",
      colorOverlay: this.props.overlayColor,

      position: this.props.position,
      featured: this.props.featured,
    };
    const styles = {
      card: {
        position: "relative",
        width: variables.featured ? 703 : 336,
        height: variables.featured ? 240 : 195,
        marginBottom: 30,
        marginLeft: variables.position === "right" ? 30 : 0,
        float: "left",
        
        ':hover': {
        },
      },
      cardLink: {
        border: "none",
      },
      textBox: {
        position: "absolute",
        height: 60,
        transition: "height 50ms ease-in-out",
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        left: 30,
        right: 30,
        bottom: 0,
        backgroundColor: variables.colorBackgroundWhite,
        zIndex: 10,

        onCardHover: {
          height: variables.featured ? 180 : 135,
        }
      },
      title: {
        display: "inline-block",
        marginBottom: 15,
        color: variables.colorDarkGray,
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "normal",
        fontSize: 14,
        textTransform: "uppercase",
        fontWeight: 600,
      },
      line: {
        display: "inline-block",
        width: 40,
        height: 2,
        backgroundColor: variables.colorDarkGray,
        marginLeft: 15,
        marginBottom: 4,
      },
      description: {
        visibility: "hidden",
        opacity: 0,
        transition: "opacity 200ms ease-in-out 0.09s",
        color: variables.colorLightGray,
        fontSize: 14,

        onCardHover: {
          visibility: "visible",
          opacity: 1,
        }
      },
      colorOverlay: {
        position: "absolute",
        backgroundColor: variables.colorOverlay,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 5,
      }
    }


    if (variables.featured){
      var image = <img src={this.props.image} width={703} height={240}></img>;
    } else {
      var image = <img src={this.props.image} width={336} height={195}></img>;
    }

    return (
        <div key = "card" style = {styles.card}>
          <Link style = {styles.cardLink} to = {`${this.props.linkTo}`}>
            <div style = {
              Radium.getState(this.state, 'card', ':hover') ?
              [styles.textBox, styles.textBox.onCardHover] :
              [styles.textBox]}>
              <div style = {styles.title}>{this.props.name}</div>
              <span style = {styles.line}></span>
              <div style = {
                Radium.getState(this.state, 'card', ':hover') ?
                [styles.description, styles.description.onCardHover] :
                [styles.description]}>
                {this.props.description}
              </div>
            </div>
            <div style={styles.colorOverlay}></div>
            {image}
          </Link>
        </div>
    );
  }
}

export default Radium(ProjectCard);
