import { Component } from "react";
import Card from "../UI/Card";
// import '../Forms/MyKitchen.css';



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

  render() {

    console.log("before render id", this.state.id);
    return (
      <Card>
        <div>
          <img src={this.state.image} wide="100" height="100"></img>
          <Card>{this.state.name}</Card>
          <Card>{this.state.description}</Card>
        </div>
      </Card>
    );
  }
  

  
}
