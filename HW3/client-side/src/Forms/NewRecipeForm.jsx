import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import "./NewIngridenForm.css";

const NewRecipeForm = (props) => {
  const [enteredRecipeName, setRecipeName] = useState("");
  const [enteredCookingMethod, setCookingMethod] = useState("");
  const [enteredCookingTime, setCookingTime] = useState("");
  const [enteredImageUrl, setImageUrl] = useState("");

  const recipeNameHandler = (e) => {
    console.log(e.target.value);
    setRecipeName(e.target.value);
  }; // setting recipe name

  const cookingMethodHandler = (e) => {
    console.log(e.target.value);
    setCookingMethod(e.target.value);
  }; // setting cooking method

  const cookingTimeHandler = (e) => {
    console.log(e.target.value);
    setCookingTime(e.target.value);
  }; // setting cooking time time

  const enteredURLHandler = (e) => {
    console.log(e.target.value);
    setImageUrl(e.target.value);
  }; // setting the image url

  const submitHandler = (e) => {
    const newRecipe = {
      name: enteredRecipeName,
      method: enteredCookingMethod,
      time: enteredCookingTime,
      image: enteredImageUrl,
    };
    console.log(newRecipe);
    props.onSaveRecipeClick(newRecipe); // this sending the new info to CreateNewrRecipe - I hope so...
  }; // sending an object with all the data for recipe - need to connect this to the arry.

  const resetTextHandler = () => {
    setRecipeName("");
    setImageUrl("");
    setCookingTime("");
    setCookingMethod("");
  }; // this function is reseting the text boxses

  return (
    <>
      <Card className="new-ingriden">
        <h1 style={{ textAlign: "center" }}>Crate New Recipe</h1>
        <form className="new-ingriden">
          <div className="new-ingriden__controls">
            <div className="new-ingriden__control">
              <label>Name of Recipe</label>
              <input
                placeholder="Enter Recipe Name"
                type="text"
                value={enteredRecipeName}
                onChange={recipeNameHandler}
              ></input>
            </div>
            <div className="new-ingriden__control">
              <label>Cooking Method</label>
              <input
                placeholder="Enter cooking method"
                type="text"
                value={enteredCookingMethod}
                onChange={cookingMethodHandler}
              />
            </div>
            <div className="new-ingriden__control">
              <label>Time</label>
              <input
                placeholder="Enter Cooking time (Minutes)"
                type="number"
                min="0.01"
                step="0.01"
                value={enteredCookingTime}
                onChange={cookingTimeHandler}
              />
            </div>
            <div className="new-ingriden__control">
              <label>Image</label>
              <input
                placeholder="Enter Recipe Image URL"
                type="text"
                value={enteredImageUrl}
                onChange={enteredURLHandler}
              />
            </div>
          </div>
        </form>
      </Card>
      <Card className="new-ingriden">
        <div>
          <button onClick={resetTextHandler}>Cancel</button>
          <button onClick={submitHandler}>Add ingriden</button>
        </div>
      </Card>
    </>
  );
};

export default NewRecipeForm;
