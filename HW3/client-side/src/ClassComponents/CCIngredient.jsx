import { Component } from "react";

export default class CCIIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      name: this.props.name,
      description: this.props.description,
      id: this.props.id,
    };
  }
}
