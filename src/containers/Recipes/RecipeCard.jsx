import React from 'react';
import './RecipeCard.scss'

const RecipeCard = ({ recipe }) => {
console.log(recipe.id, recipe);

  return (
    <div className="RecipeCard">
        <img
          src={`http://localhost:5000/api/recipeImage/${recipe.id}`}
          alt=""
        />
        <div className="recipe-title">
          <h4>{ recipe.title }</h4>
        </div>
        <div className="mouse-over"></div>
    </div>
  );
};

export default RecipeCard;
