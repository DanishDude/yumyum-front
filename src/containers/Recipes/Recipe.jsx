import React from 'react';
import { connect } from 'react-redux';

const Recipe = (recipeObj) => {

  console.log('RECIPE ', recipeObj);
  console.log('THE RECIPE ', recipeObj.history.location.state.recipe);

  const recipe = recipeObj.history.location.state.recipe;
  
  return (
    <div className="Recipe">
      This is a recipe page of {recipe.title}
      <h5>with recipe ID {recipe.id}</h5>
    </div>
  );
};

export default Recipe;
