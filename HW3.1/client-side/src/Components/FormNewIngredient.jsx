import React, { useState } from "react";


export default function FormNewIngredient() {
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
  // setting the calories

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
    resetTextHandler();


  }; // I'm here --> still dont getting an object from this function - but why?!?(Fixed)

  return (
    <>
      <div className="card">
        <h1 style={{ textAlign: "center" }}>Crate New Ingredient</h1>
        <form className="form-New-ingriden_Recipe">
          <div className="form__controls">
            <div className="form__control">
              <label>Name of Ingredient</label>
              <input
                placeholder="Enter Ingredient Name"
                type="text"
                value={enteredName}
                onChange={inputNameHandler}
              ></input>
            </div>
            <div className="form__control">
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
            <div className="form__control">
              <label>Image</label>
              <input
                placeholder="Enter Ingredient Image URL"
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
          <button onClick={submitHandler}>Add ingriden</button>
        </div>
      </div>
    </>
  );
}