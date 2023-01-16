import React from "react";
import Card from "../UI/Card";
import NewRecipeForm from "../Forms/NewRecipeForm";


const CreateNewRecipe = (props) => {
    const saveNewRecipeHandler = (enteredNewRecipe) => {
      const newRecipe = {
        ...enteredNewRecipe,
        id: Math.random().toString(),
      };
      console.log("New arry of recipes" + newRecipe);
      props.onAddRecipe(newRecipe);
    };
    
    

  return (
    <Card>
      <NewRecipeForm onSaveRecipeClick={saveNewRecipeHandler} />
    </Card>
  );
};

export default CreateNewRecipe;
