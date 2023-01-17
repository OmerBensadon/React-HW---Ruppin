import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CreateNewIngredient from "../Pages/CreateNewIngredient";
import CreateNewRecipe from "../Pages/CreateNewRecipe";
import MyKitchen from "../Pages/MyKitchen";

export default function NaveManu(props) {
  return (
    <>
      <div className="menu-Button">
        <Link to="/MyKitchen">My Kitchen</Link>
        <Link to="/">Create New Recipe</Link>
        <Link to="/CreateNewIngredient">Create New Ingredient</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<CreateNewRecipe />} />
          <Route
            path="/CreateNewIngredient"
            element={<CreateNewIngredient />}
          />
          <Route path="/MyKitchen" element={<MyKitchen />} />
        </Routes>
      </div>
    </>
  );
}
