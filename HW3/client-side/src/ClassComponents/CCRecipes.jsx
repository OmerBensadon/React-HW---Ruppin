import { Component } from "react";
import { Card } from "react-bootstrap";
import CCRecipe from "./CCRecipe";

const InitRec = [
  {
    id: 1,
    name: "Pad Thai",
    description: "stir-fry dish, mix all ingredients together",
    image:
      "https://glebekitchen.com/wp-content/uploads/2016/11/easypadthaibowltop-1-500x500.jpg",
  },
  {
    id: 2,
    name: "Pho",
    description: "slow-cooked soup",
    image:
      "https://kirbiecravings.com/wp-content/uploads/2020/04/chop-suey-5.jpg",
  },
  {
    id: 3,
    name: "Chop Suey",
    description: "vegetable in the order in which they cook.",
    image:
      "https://www.fodmapeveryday.com/wp-content/uploads/2017/06/Pho-closeup-copy-855x570.jpg",
  },
];

export default class CCRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recips: InitRec,
      prepared: [],
      counter: InitRec.length,
    };
  }

  render() {
    let recStr = this.state.recips.map((rec, ind) => (
      <CCRecipe
        key={rec.id}
        image={rec.image}
        name={rec.name}
        description={rec.description}
        id={rec.id}
      />
    ));

    return (
      <Card>
        <div>
          <div style={{ fontSize: 20, color: "black" }}>Recipes:</div>
          <div>{recStr}</div>
        </div>
      </Card>
    );
  }
}
