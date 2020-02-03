import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { asyncFetchAddModifyRecipe } from '../../actions/recipes';
import InsertRecipe from './InsertRecipe';

const CreateRecipePage = (props) => {
  const { token } = props;
  const recipe = props.location.state;
  const dispatch = useDispatch();
  const history = useHistory();

  const addModifyRecipe = (token, values) => {
    dispatch(asyncFetchAddModifyRecipe(token, values))
    // history.push('/recipes')
  };

  

  return (
    <div className="CreateRecipePage">
      <InsertRecipe onSubmit={values => addModifyRecipe(token, values)} initialValues={recipe} />
    </div>
  );
};

const mstp = state => { return { token: state.user.token } }

export default connect(mstp, null)(CreateRecipePage);
