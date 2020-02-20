import React from 'react';
import './RecipeCard.scss'

const RecipeCard = ({ recipe }) => {
  const image = recipe.image
    ? `http://localhost:5000/api/recipe/${recipe.id}/image`
    : '/empty_plate.jpeg';
  
  return (
    <div className="RecipeCard">
      <div className="img-wrapper">
        <img src={ image } alt="" />
      </div>
      <h4>{ recipe.title }</h4>
      <div className="bg-img"></div>
    </div>
  );
};

export default RecipeCard;
