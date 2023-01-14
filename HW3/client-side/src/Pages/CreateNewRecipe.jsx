import React from "react";
import Card from "../UI/Card";
import NewRecipeForm from "../Forms/NewRecipeForm";


const CreateNewRecipe = (props) => {
  return (
    <Card>
      <NewRecipeForm />
    </Card>
  );
};

export default CreateNewRecipe;
