import React from "react";
import Card from "../UI/Card";
import './MyKitchen.css';
import CCRecipes from "../ClassComponents/CCRecipes";

const MyKitchen = (props) => {
  return (
    <Card className="recipe">
      <CCRecipes />
    </Card>
  );
};

export default MyKitchen;
