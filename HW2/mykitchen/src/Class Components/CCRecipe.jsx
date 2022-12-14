import { Component, useState } from "react";

export default class CCRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      name: this.props.name,
      description: this.props.description,
      id: this.props.id,
    };
  }

  btnPepa = () => {
    this.props.onPrepareClick
      ? this.props.onPrepareClick(this.state.id)
      : this.props.onEatClick(this.state.id);
  };
  render() {
    console.log("before render id", this.state.id);
    return (
      <div className="recipe">
        <img src={this.state.image} wide="100" height="100"></img>
        <br />
        {this.state.name}
        <br />
        <br />
        {this.state.description}
        <br />
        <br />
        <button onClick={this.btnPepa}>
          {this.props.onPrepareClick ? "Prepare Dish" : "EAT"}
        </button>
        <br />
        <br />
      </div>
    );
  }
}
