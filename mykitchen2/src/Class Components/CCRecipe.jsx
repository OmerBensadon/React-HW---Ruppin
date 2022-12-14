import { Component } from "react";

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

  btnPape = () => {
    this.props.onPrepaClick
    ? this.props.onPrepaClick(this.state.id)
    : this.props.onEatClick(this.state.id);
  };
  render() {
    console.log("before render id " + this.state.id);
    return (
      <div className="recipe">
        <img src={this.state.image} width="100" height="100"></img>
        <br />
        <br />
        {this.state.name}
        <br />
        <br />
        {this.state.description}
        <br />
        <br />
        <button onClick={this.btnPape}> {this.props.onPrepaClick ? "Prepare Dish" : "Eat" }</button>
        <br />
        <br />
      </div>
    );
  }
}
