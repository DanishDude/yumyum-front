import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { asyncFetchRecipe } from '../../actions/recipes';
import './Recipe.scss';

const Recipe = (props) => {
  console.log(props);
  const { id } = props.match.params;
  const { title, description, ingredients, prep_timre, cookt_time, instructions } = props.recipe;
  
  
  const dispatch = useDispatch();
  
  useEffect(() => { dispatch(asyncFetchRecipe(id)) }, []);
  
  //recipe.prep_time = recipe.prep_time / 60;
  //recipe.cook_time = recipe.cook_time / 60;
  
  return (
    <div className="Recipe">
      <h1>{title}</h1>
      <img src={`http://localhost:5000/api/recipe/${id}/image`} alt="" />
      <div className=" section story">
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
        {ingredients && ingredients[0] ?
          <div className="section steps">
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
