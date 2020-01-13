import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncFetchAddRecipe } from '../../actions/recipes';
import InsertRecipe from './InsertRecipe';

const CreateRecipePage = (token) => {
  const dispatch = useDispatch();
  console.log(token.token);

  const addRecipe = (token, values) => {
    console.log(values);
    
    dispatch(asyncFetchAddRecipe(token, values));
  };

  return (
    <div className="CreateRecipePage">
      hello
      <InsertRecipe onSubmit={(values) => addRecipe(token.token, values)} />
    </div>
  );
};

const mstp = state => { return { token: state.user.token } }

const mdtp = dispatch => bindActionCreators({ asyncFetchAddRecipe }, dispatch);

export default connect(mstp, mdtp)(CreateRecipePage);
