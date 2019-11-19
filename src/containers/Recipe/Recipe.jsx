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
        <div className="header-details">
          <h6 className="tag-list">{recipe.tag_list}</h6>
          <p className="prep-cook-times">
            Prep: {recipe.preparation_time}min, Cook: {recipe.cook_time}min
          </p>
        </div>
      </div>
      <div className="story-wrapper">
        <div className="cover">
          <img
            className="cover-photo"
            src={`http://localhost:5000/api/recipeImage/${recipe.id}`}
            alt=""
          />
        </div>
        <div className="story">
          <p>{recipe.description}</p>
        </div>
      </div>
      <div className="instructions">
        <div className="ingredients">
          <h4>Ingredients</h4>
          <ul className="ingredients-list">
            {recipe.ingredient_list.split(', ').map((ingredient, index) =>
              <li key={index}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4 className="step-header">What to do</h4>
          <ul className="step">
            {recipe.instructions.split('-,-').map((step, index) => 
              <li key={index}>
                <h6>Step {index +1}</h6>
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
