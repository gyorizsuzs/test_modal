import { useState } from "react";
import MealList from "../meal_list/MealList";

import "./modal.scss";

const Modal = () => {
  const [mealPlan, setMealPlan] = useState(null);
  const [calories, setCalories] = useState(1600);

  function getMealPlan() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=5d7d6fdfdb7344eb83cc81d23aba5e70&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealPlan(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(event) {
    setCalories(event.target.value);
  }

  return (
    <div className="wrapper">
      <div className="control">
        <input
          className="inner"
          type="number"
          placeholder="Calorie Goal"
          onChange={handleChange}
        />
        <button onClick={getMealPlan}>Get Daily Meal Plan</button>
      </div>
      {mealPlan && <MealList mealPlan={mealPlan} />}
    </div>
  );
};

export default Modal;
