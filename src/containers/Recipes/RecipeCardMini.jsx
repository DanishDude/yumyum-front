import React from 'react';
import './RecipeCardMini.scss';

const RecipeCardMini = ({ recipe }) => {
  const image = recipe.image
    ? `http://localhost:5000/api/recipe/${recipe.id}/image`
    : '/empty_plate.jpeg'
  
  return (
    <div className="RecipeCardMini">
        <img src={image} alt="" />
        <div className="recipe-title">
          <h4>{ recipe.title }</h4>
        </div>
        <div className="bg-img"></div>
    </div>
  );
};

export default RecipeCardMini;