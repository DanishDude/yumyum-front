import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { asyncFetchRecipe } from '../../actions/recipes';
import './Recipe.scss';

const Recipe = (props) => {
  console.log(props);
  const { id } = props.match.params;
  const { recipe } = props;
  const dispatch = useDispatch();
  
  useEffect(() => { dispatch(asyncFetchRecipe(id)) }, []);
  
  //recipe.prep_time = recipe.prep_time / 60;
  //recipe.cook_time = recipe.cook_time / 60;
  
  return (
    <div className="Recipe">
      <h1>{recipe.title}</h1>
      <img src={`http://localhost:5000/api/recipe/${id}/image`} alt="" />
    </div>
  );
};

const mstp = state => { return { recipe: state.recipes.recipe } };

export default connect(mstp, null)(Recipe);
