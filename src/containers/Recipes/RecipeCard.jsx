import React from 'react';
import './RecipeCard.scss'

const RecipeCard = ({ recipe }) => {
  const image = recipe.image
    ? `http://localhost:5000/api/recipe/${recipe.id}/image`
    : '/empty_plate.jpeg';
  
  return (
    <div className="RecipeCard">
        <img src={ image } alt="" />
        <h4>{ recipe.title }</h4>
        <div className="bg-img"></div>
    </div>
  );
};

export default RecipeCard;
