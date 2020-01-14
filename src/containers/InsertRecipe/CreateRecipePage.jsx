import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { asyncFetchAddRecipe } from '../../actions/recipes';
import InsertRecipe from './InsertRecipe';

const CreateRecipePage = (token) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const addRecipe = (token, values) => { 
    dispatch(asyncFetchAddRecipe(token, values))
    history.push('/recipes')
  };

  return (
    <div className="CreateRecipePage">
      <InsertRecipe onSubmit={values => addRecipe(token.token, values)} />
    </div>
  );
};

const mstp = state => { return { token: state.user.token } }

const mdtp = dispatch => bindActionCreators({ asyncFetchAddRecipe }, dispatch);

export default connect(mstp, mdtp)(CreateRecipePage);
