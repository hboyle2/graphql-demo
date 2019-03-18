import React, { Component } from "react";
import "../styles/WizardList.css";
class Wizard extends Component {
  render() {
    return (
      <div className="character">
        <img
          className="img"
          src={this.props.link.image}
          alt={this.props.link.name}
        />
        <div>{this.props.link.name}</div>
      </div>
    );
  }
}

export default Wizard;
