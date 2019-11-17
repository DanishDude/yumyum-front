import React from 'react';
import './Recipe.scss';

const Recipe = (recipeObj) => {
  const recipe = recipeObj.history.location.state.recipe;
  console.log(recipe);
  console.log(recipe.tag_list.split(', '));
    
  
  return (
    <div className="Recipe">
      <h5>Recipe ID {recipe.id}</h5>
      <div className="header">
        <h2>{recipe.title}</h2>
        <h6>{recipe.tag_list}</h6>
        <p>Prep: {recipe.preparation_time} Cook: {recipe.cook_time}</p>
      </div>
      <div className="story">
        <img src={`http://localhost:5000/api/recipeImage/${recipe.id}`} alt="" />
        <p>{recipe.description}</p>
      </div>
      <div>
        <ul>
          {recipe.ingredient_list.split(', ').map(ingredient =>
            <li>
              {ingredient}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
