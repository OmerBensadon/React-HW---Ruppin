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
      recipes: InitRec,
      prepared: [],
    };
  }

  onPrepaedClick = (id) => {
    console.log("prepared id " + id);
    let toCook = this.state.recipes.filter((recipe) => recipe.id === id);
    let toRemove = this.state.recipes.filter((recipe) => recipe.id !== id);
    toCook = toCook.concat(this.state.prepared);
    console.log(toCook);
    console.log(toRemove);
    this.setState({ ...this.state, recipes: toRemove, prepared: toCook });
  };
  onEatClick = (id) => {
    console.log("Eat id " + id);
    let toRemove = this.state.prepared.filter((recipe) => recipe.id === id);
    let toCook = this.state.prepared.filter((recipe) => recipe.id !== id);
    toRemove = toRemove.concat(this.state.recipes);
    console.log(toCook);
    console.log(toRemove);
    this.setState({ ...this.state, recipes: toRemove, prepared: toCook });
  };
  render() {
    let recStr = this.state.recipes.map((rec, ind) => (
      <CCRecipe
        image={rec.image}
        name={rec.name}
        description={rec.description}
        key={rec.id}
        id={rec.id}
        onPrepaClick={this.onPrepaedClick}
      />
    ));
    let eatStr = this.state.prepared.map((rec, ind) => (
      <CCRecipe
        image={rec.image}
        name={rec.name}
        description={rec.description}
        key={rec.id}
        id={rec.id}
        onEatClick={this.onEatClick}
      />
    ));

    return (
      <>
        <h1 style={{ textAlign: "center", color: "black" }}>Recipes</h1>
        <div style={{ textAlign: "center", color: "black", fontSize: 20 }}>
          Recipes Made:
        </div>
        <div className="list">{recStr}</div>

        <div>
          {this.state.prepared.length > 0 && (
            <div>
              <h1>Ready to Eat</h1>
              <div>Recipes Made: {this.state.prepared.length}</div>
              <div className="list">{eatStr}</div>
            </div>
          )}
        </div>
      </>
    );
  }
}