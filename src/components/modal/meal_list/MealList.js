import React from 'react';
import Meal from '../meal/Meal';

const MealList = ({ mealPlan }) => {
  const nutrients = mealPlan.nutrients;

  return (
    <main>
      <section className='nutrients'>
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section className='meals'>
        {mealPlan.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
};

export default MealList;
