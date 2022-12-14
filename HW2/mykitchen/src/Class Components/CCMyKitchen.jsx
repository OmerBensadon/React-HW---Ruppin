import { Component } from "react";
import CCRecipes from "./CCRecipes";

export default class CCMykitchen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hell
      <CCRecipes />
    </div>;
  }
}
