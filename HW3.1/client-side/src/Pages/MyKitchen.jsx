import React, { useEffect, useState } from "react";

const apiUrlRecipes = "https://localhost:44374/api/recipes/"; // this is the server name and connection for recipes
const apiUrlIngredients = "https://localhost:44374/api/ingredients/"; // this is the server name and connection for ingredients
export default function MyKitchen(props) {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    fetch(apiUrlRecipes, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        'Accept': "application/json; charset=UTF-8",
      }),
    })
      .then((response) => {
        console.log("response =", response);
        console.log("response.status", response.status);
        console.log("response.ok", response.ok);
        return response.json();
      })
      .then(
        (result) => {
          setRecipes(result);
          console.log("fetch FetchGetRecipes= ", result);
          result.map((rec) => console.log(rec.Name));
          console.log("result[0].Name=", result[0].Name);
        },
        (error) => {
          console.log("err post=", error);
        }
      ); }, []); // this is Get() --> calling the recipes data from the Server
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
          <h3>Ingredient Name: {Ingred.Name}</h3>

          <img src={Ingred.Image} wide="100" height="100"></img>
          <p>Calories: {Ingred.Calories}</p>
        </div>
      </div>
    ));
  let recStr = recipes.map((recipe) => (
    <div className="list" key={recipe.Id}>
      <div className="recipe">
        <h3>Recipe Name: {recipe.Name}</h3>
        <p>Cooking Method: {recipe.CookingMethod}</p>
        <img src={recipe.Image} wide="200" height="200"></img>
        <p>Cooking time: {recipe.Time}</p>
      </div>
    </div>
  ));
   // Those two are maping the arrys so it will be more clean to render them
  return (
    <>
      <div className="card">
        <h1 style={{ textAlign: "center" }}>Recipes</h1>
        <div>{recStr}</div>
      </div>
      <div className="card">
        <h1 style={{ textAlign: "center" }}>Ingredients</h1>
        <div>{ingStr}</div>
      </div>
    </>
  );
}
