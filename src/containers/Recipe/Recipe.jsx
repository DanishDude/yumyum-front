import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { asyncFetchRecipe } from '../../actions/recipes';
import './Recipe.scss';

const Recipe = (props) => {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const { title, description, ingredients, prep_time, cook_time, instructions } = props.recipe;
  const image = props.recipe.image
    ? `http://localhost:5000/api/recipe/${id}/image`
    : '/empty_plate.jpeg';
  
  useEffect(() => { dispatch(asyncFetchRecipe(id)) }, []);

  console.log(props.recipe);
  
  
  return (
    <div className="Recipe">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <div className="time">
        <p>{prep_time > 0 ? `Prep: ${prep_time}min` : ''}</p>
        <p>{cook_time > 0 ? `Cook: ${cook_time}min` : ''}</p>
      </div>
      {description ?
        <div className="section story">
          <p className="">{description}</p>
        </div> : ''}
      {ingredients && ingredients[0] ?
        <div className="section ingredients">
        <h3>Ingredients</h3> 
          <ul>
            {ingredients && ingredients[0] ?
              ingredients.map((ingredient, i) => 
              <li key={i}>
                {ingredient}
              </li>) : ''}
          </ul>
        </div> : ''}
        {instructions && instructions[0] ?
          <div className="section steps">
            <h3>Steps</h3>
            <ul>
              {instructions && instructions[0] ?
                instructions.map((step, i) => 
                <li key={i}>
                  <h2>{i+1}.</h2>
                  <p>{step}</p>
                </li>) : ''}
            </ul>
          </div> : ''}
    </div>
  );
};

const mstp = state => { return { recipe: state.recipes.recipe } };

export default connect(mstp, null)(Recipe);
