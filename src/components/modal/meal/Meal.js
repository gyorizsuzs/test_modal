import React, { useState, useEffect } from 'react';
import './meal.scss';

const Meal = ({ meal }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=5d7d6fdfdb7344eb83cc81d23aba5e70`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => console.log('error'));
  }, [meal.id]);

  return (
    <div>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt='recipe' />
      <ul>
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl}>Go to recipe</a>
    </div>
  );
};

export default Meal;
