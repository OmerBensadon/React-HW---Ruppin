import React, { useState } from "react";

const apiUrlRecipes = "https://localhost:44374/api/recipes/"; // this is the server name and connection for recipes

export default function FormNewRecipe(props) {
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
    e.preventDefault();
    const newRecipe = {
      Name: enteredRecipeName,
      CookingMethod: enteredCookingMethod,
      Time: enteredCookingTime,
      Image: enteredImageUrl,
    };
    console.log(newRecipe);
    resetTextHandler();
    fetch(apiUrlRecipes, {
      method: "POST",
      body: JSON.stringify(newRecipe),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8", //very important to add the 'charset=UTF-8'!!!!
        'Accept': "application/json; charset=UTF-8",
      }),
    })
      .then((response) => {
        console.log("response=", response);
        return response.json();
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.Avg);
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  }; // Sending an object with all the data for recipe.

  const resetTextHandler = () => {
    setRecipeName("");
    setImageUrl("");
    setCookingTime("");
    setCookingMethod("");
  }; // this function is reseting the text boxses

  return (
    <>
      <div className="card">
        <h1 style={{ textAlign: "center" }}>Crate New Recipe</h1>
        <form className="form-New-ingriden_Recipe">
          <div className="form__controls">
            <div className="form__control">
              <label>Name of Recipe</label>
              <input
                placeholder="Enter Recipe Name"
                type="text"
                value={enteredRecipeName}
                onChange={recipeNameHandler}
              ></input>
            </div>
            <div className="form__control">
              <label>Cooking Method</label>
              <input
                placeholder="Enter cooking method"
                type="text"
                value={enteredCookingMethod}
                onChange={cookingMethodHandler}
              />
            </div>
            <div className="form__control">
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
            <div className="form__control">
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
      </div>
      <div className="form-Button-Card">
        <div className="form button">
          <button onClick={resetTextHandler}>Cancel</button>
          <button onClick={submitHandler}>Add Recipe</button>
        </div>
      </div>
    </>
  );
}
