import { Component } from "react";
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

  onPrepareHandler = (id) => {
    console.log("Hi:" + id);
    let chososed = this.state.recips.filter((recipe) => recipe.id == id);
    let chososed2 = this.state.recips.filter((recipe) => recipe.id != id);
    chososed = chososed.concat(this.state.prepared);
    this.setState({ ...this.state, recips: chososed2, prepared: chososed });
  };

  onEatHandler = (id) => {
    console.log("Eat:" + id);
    let chososed2 = this.state.prepared.filter((recipe) => recipe.id == id);
    let chososed = this.state.prepared.filter((recipe) => recipe.id != id);
    chososed2 = chososed2.concat(this.state.recips);
    this.setState({ ...this.state, recips: chososed2, prepared: chososed });
  };

  render() {
    let recStr = this.state.recips.map((rec, ind) => (
      <CCRecipe
        key={rec.id}
        image={rec.image}
        name={rec.name}
        description={rec.description}
        id={rec.id}
        onPrepareClick={this.onPrepareHandler}
        // onEatClick={this.onEatHandler}
      />
    ));

    let eatStr = this.state.prepared.map((rec, ind) => (
      <CCRecipe
        key={rec.id}
        image={rec.image}
        name={rec.name}
        description={rec.description}
        id={rec.id}
        // onPrepareClick={this.onPrepareHandler}
        onEatClick={this.onEatHandler}
      />
    ));

    return (
      <>
        <div>
          <div style={{ fontSize: 20, color: "black" }}>Recipes made:</div>
          <div className="list">{recStr}</div>
        </div>

        {this.state.prepared.length > 0 && (
          <div>
            <h1 style={{ textAlign: "center", color: "black" }}>
              Ready to EAT!
            </h1>
            <div style={{ fontSize: 20, color: "black" }}>
              Recipes made: {this.state.prepared.length}
            </div>
            <div className="list">{eatStr}</div>
          </div>
        )}
      </>
    );
  }
}
