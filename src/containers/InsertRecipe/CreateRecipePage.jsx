import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { asyncFetchAddModifyRecipe, initializeModifyRecipe } from '../../actions/recipes';
import InsertRecipe from './InsertRecipe';

const CreateRecipePage = (token, recipe) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const addRecipe = (token, values) => {
    dispatch(asyncFetchAddModifyRecipe(token, values))
    history.push('/recipes')
  };
  console.log(recipe);

  // if (recipe) dispatch(initializeModifyRecipe(recipe));

  return (
    <div className="CreateRecipePage">
      <InsertRecipe onSubmit={values => addRecipe(token.token, values)} recipe={recipe} />
    </div>
  );
};

const mstp = state => { return { token: state.user.token } }

export default connect(mstp, null)(CreateRecipePage);
