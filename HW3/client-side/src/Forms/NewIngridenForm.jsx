import React, { useState } from "react";
import Card from "../UI/Card";
import "./NewIngridenForm.css";

const NewIngridenForm = (props) => {
  // those useState are setting the value from the input
  const [enteredName, setEnteredName] = useState("");
  const [enteredImageUrl, setImageUrl] = useState("");
  const [enteredCalories, setCalories] = useState("");

  const inputNameHandler = (e) => {
    console.log("Name entered " + e.target.value);
    setEnteredName(e.target.value);
  }; // setting the ingriden name

  const enteredURLHandler = (e) => {
    console.log("url - " + e.target.value);
    setImageUrl(e.target.value);
  }; // setting the Image url

  const caloriesHandler = (e) => {
    console.log("entered calories " + e.target.value);
    setCalories(e.target.value);
  };
  // setting the caloties

  const resetTextHandler = () => {
    setEnteredName("");
    setImageUrl("");
    setCalories("");
  }; // this function is reseting the text boxses

  const submitHandler = (e) => {
    e.preventDefault();
    const newIngriden = {
      name: enteredName,
      image: enteredImageUrl,
      calories: enteredCalories,
    };
    console.log(newIngriden);
  }; // I'm here --> still dont getting an object from this function

  return (
    <>
      <Card className="new-ingriden">
        <h1 style={{ textAlign: "center" }}>Add New Ingredient</h1>
        <form className="new-ingriden">
          <div className="new-ingriden__controls">
            <div className="new-ingriden__control">
              <label>Name</label>
              <input
                placeholder="Entered Ingredient Name"
                type="text"
                value={enteredName}
                onChange={inputNameHandler}
              />
            </div>
            <div className="new-ingriden__control">
              <label>Image</label>
              <input
                placeholder="Entered Ingredient Image URL"
                type="text"
                value={enteredImageUrl}
                onChange={enteredURLHandler}
              />
            </div>
            <div className="new-ingriden__control">
              <label>Calories</label>
              <input
                placeholder="Entered Ingredient Calories"
                type="number"
                min="0.01"
                step="0.01"
                value={enteredCalories}
                onChange={caloriesHandler}
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

export default NewIngridenForm;
