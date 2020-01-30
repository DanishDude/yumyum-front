import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { asyncFetchRecipe } from '../../actions/recipes';
import './Recipe.scss';

const Recipe = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const { title, description, ingredients, prep_time, cook_time, instructions } = props.recipe;
  
  useEffect(() => { dispatch(asyncFetchRecipe(id)) }, []);
  
  return (
    <div className="Recipe">
      <h1>{title}</h1>
      <img className="blury" src={`http://localhost:5000/api/recipe/${id}/image`} alt="" />
      <img className="main" src={`http://localhost:5000/api/recipe/${id}/image`} alt="" />
      <div className="time">
        <p>{prep_time > 0 ? `Prep: ${prep_time}min` : ''}</p>
        <p>{cook_time > 0 ? `Cook: ${cook_time}min` : ''}</p>
      </div>
      <div className="section story">
        <p>{description}</p>
      </div>
      {ingredients && ingredients[0] ?
        <div className="section ingredients">
        <h3>Ingredients</h3> 
          <ul>
            {ingredients && ingredients[0] ?
              ingredients.split(',').map((ingredient, i) => 
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
                instructions.split('|').map((step, i) => 
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
