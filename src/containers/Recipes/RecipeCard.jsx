import React from 'react';
import './RecipeCard.scss'

const RecipeCard = ({ recipe }) => {
  const image = recipe.image
    ? `http://localhost:5000/api/recipe/${recipe.id}/image`
    : '/empty_plate.jpeg'
  
  return (
    <div className="RecipeCard">
        <img src={image} alt="" />
        <div className="recipe-title">
          <h4>{ recipe.title }</h4>
        </div>
        <div className="mouse-over"></div>
    </div>
  );
};

export default RecipeCard;
