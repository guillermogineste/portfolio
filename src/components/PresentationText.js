import React from "react";
import { Link } from "react-router";

class PresentationText extends React.Component {
  render() {
    const styles = {
      mainParagraph: {
        color: "#5C5C5C",
        fontSize: 16,
        lineHeight: "25px",
        width: 520,
        margin: "0 auto 60px auto",
      },
    }

    return (
        <div>
          <p style = {styles.mainParagraph}>
            The Emerald Buddha is a figurine of a sitting Budha, that is the is the palladium of the Kingdom of Thailand. The Buddha is made of green jade, suprisingly not of emerald, clothed in gold is approximately 45 cm tall. The Buddha is kept in the Chapel of the Emerald Buddha, which is located on the grounds of the Grand Palace in Bangkok.
            <br/><br/>
            <Link className="regular-link" to="about" activeClassName="active">More information about me</Link>
          </p>
        </div>
    );
  }
}

export default PresentationText;
