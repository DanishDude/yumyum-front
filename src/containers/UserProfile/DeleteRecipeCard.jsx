import React from 'react'
import './DeleteRecipeCard.scss';

const DeleteRecipeCard = ({ recipe }) => {
  const image = recipe.image
    ? `http://localhost:5000/api/recipe/${recipe.id}/image`
    : '/empty_plate.jpeg'
  
  return (
    <div className="DeleteRecipeCard">
      <img src={image} alt="" />
      <div className="recipe-title">
        <h4>{recipe.title}</h4>
      </div>
    </div>
  );
};

export default DeleteRecipeCard;
