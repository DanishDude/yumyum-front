import React from 'react'
import './RecipeTile.scss';

const RecipeTile = ({ recipe }) => {
  const image = recipe.image
    ? `http://localhost:5000/api/recipe/${recipe.id}/image`
    : '/empty_plate.jpeg';

  return (
    <div className="RecipeTile">
      <img src={ image } alt="" />
      <h4>{ recipe.title }</h4>
    </div>
  );
};

export default RecipeTile;
