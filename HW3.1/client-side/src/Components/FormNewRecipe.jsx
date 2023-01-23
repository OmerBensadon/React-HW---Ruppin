import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

const apiUrlRecipes = "https://localhost:44374/api/recipes/"; // this is the server name and connection for recipes
const apiUrlIngredients = "https://localhost:44374/api/ingredients/"; // this is the server name and connection for ingredients

export default function FormNewRecipe(props) {
  const [enteredRecipeName, setRecipeName] = useState("");
  const [enteredCookingMethod, setCookingMethod] = useState("");
  const [enteredCookingTime, setCookingTime] = useState("");
  const [enteredImageUrl, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState([]);

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

  const addIngredientHandler = (Id) => {
    console.log(Id);
  }; // i"m here --> still can't get the arry
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
        Accept: "application/json; charset=UTF-8",
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
  useEffect(() => {
    fetch(apiUrlIngredients, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((response) => {
        console.log("response=", response);
        console.log("response.status", response.status);
        console.log("response.ok", response.ok);
        return response.json();
      })
      .then(
        (result) => {
          setIngredients(result);
          console.log("fetch FetchGetIngredients= ", result);
          result.map((ing) => console.log(ing.Name));
          console.log("result[0].Name=", result[0].Name);
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  }, []); // This is Get() --> calling the Ingredients data from the Server
  let ingStr = ingredients.map((Ingred) => (
    <div className="list" key={Ingred.Id}>
      <div className="recipe">
        <Button className="form-Button" onClick={addIngredientHandler}>
          Add Ingredient
        </Button>
        <h3>Ingredient Name: {Ingred.Name}</h3>

        <img src={Ingred.Image} wide="100" height="100"></img>
        <p>Calories: {Ingred.Calories}</p>
      </div>
    </div>
  ));
  return (
    <Card className="card1">
      <div>
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
      <div className="card">
        <h1 style={{ textAlign: "center" }}>
          Please select Ingredients for your recipe
        </h1>
        {ingStr}
      </div>
      <div className="form-Button-Card">
        <div className="form button">
          {/* <button onClick={resetTextHandler}>Cancel</button>
          <button onClick={submitHandler}>Add Recipe</button> */}
          <Button onClick={resetTextHandler}>Cancel</Button>
          <Button onClick={submitHandler}>Add Recipe </Button>
        </div>
      </div>
    </Card>
  );
}
