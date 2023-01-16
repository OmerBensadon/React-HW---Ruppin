import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CreateNewIngredient from "../Pages/CreateNewIngredient";
import CreateNewRecipe from "../Pages/CreateNewRecipe";
import MyKitchen from "../Pages/MyKitchen";

export default function NaveManu(props) {
  return (
    <>
      <div className="menu-Button">
        <Link to="/">My Kitchen</Link>
        <Link to="/CreateNewRecipe">Create New Recipe</Link>
        <Link to="/CreateNewIngredient">Create New Ingredient</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<MyKitchen />} />
          <Route path="/CreateNewRecipe" element={<CreateNewRecipe />} />
          <Route
            path="/CreateNewIngredient"
            element={<CreateNewIngredient />}
          />
        </Routes>
      </div>
    </>
  );
}
