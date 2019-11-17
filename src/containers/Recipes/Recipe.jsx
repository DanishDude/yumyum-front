import React from 'react';
import './Recipe.scss';

const Recipe = (recipeObj) => {
  const recipe = recipeObj.history.location.state.recipe;
  recipe.preparation_time = recipe.preparation_time / 60;
  recipe.cook_time = recipe.cook_time / 60;
  console.log(recipe);
  
  return (
    <div className="Recipe">
      <div className="header">
        <h2 className="title">{recipe.title}</h2>
        <h6 className="tag-list">{recipe.tag_list}</h6>
        <p className="prep-cook-times">
          Prep: {recipe.preparation_time} Cook: {recipe.cook_time}
        </p>
      </div>
      <div className="story">
        <img src={`http://localhost:5000/api/recipeImage/${recipe.id}`} alt="" />
        <p>{recipe.description}</p>
      </div>
      <div className="text">
        <div className="ingredients">
          <ul>
            {recipe.ingredient_list.split(', ').map((ingredient, index) =>
              <li key={index}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
        <div className="instructions">
          <ul>
            {recipe.instructions.split('-,-').map((step, index) => 
              <li key={index}>
                {step}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
