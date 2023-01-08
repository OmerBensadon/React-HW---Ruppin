import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CreateNewIngriden from "./CreateNewIngriden";
import CreateNewRecipe from "./CreateNewRecipe";
import MyKitchen from "./MyKitchen";
import Card from "../UI/Card";
import "./NavaMenu.css";

const NavaMenu = (props) => {
  return (
    <>
      <Card className="menu-Button">
        <Link to="/">My Kitchen </Link>
        <Link to="/CreateNewIngriden">Create New Ingredient </Link>
        <Link to="/CreateNewRecipe">Create New Recipe </Link>
      </Card>
      <Card>
        <div>
          <Routes>
            <Route path="/" element={<MyKitchen />} />
            <Route path="/CreateNewIngriden" element={<CreateNewIngriden />} />
            <Route path="/CreateNewRecipe" element={<CreateNewRecipe />} />
          </Routes>
        </div>
      </Card>
    </>
  );
};

export default NavaMenu;
