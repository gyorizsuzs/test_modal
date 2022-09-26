import { useState } from "react";
import Search from "./Search";
import MealList from "./MealList";

const Modal = () => {
  const [mealPlan, setBreakfastPlan] = useState(null);
  /* const [calories, setCalories] = useState(1600); */

  function getBreakfastPlan() {
    fetch(
      `https://api.spoonacular.com/recipes/autocomplete?apiKey=5d7d6fdfdb7344eb83cc81d23aba5e70&number=5&type=breakfast`
    )
      .then((response) => response.json())
      .then((data) => {
        setBreakfastPlan(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error during fetch");
      });
  }

  function onChangeHandler(event) {
    const searchField = event.target.vallue.toLowerCase();
    this.useState(() => {
      return { searchField };
    });
  }

  return (
    <div className="wrapper">
      <div className="control">
        <Search onChange={onChangeHandler} />
        <button onClick={getBreakfastPlan}>Get Your Breakfast Plan</button>
      </div>
      {mealPlan && <MealList mealPlan={mealPlan} />}
    </div>
  );
};

export default Modal;
