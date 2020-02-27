import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { asyncFetchAddModifyRecipe } from '../../actions/recipes';
import InsertRecipe from './InsertRecipe';

const CreateRecipePage = (props) => {
  const { token } = props;
  const recipe = props.location.state;
  const dispatch = useDispatch();

  const addModifyRecipe = (token, values) => dispatch(asyncFetchAddModifyRecipe(token, values));

  return (
    <div className="CreateRecipePage">
      <InsertRecipe onSubmit={values => addModifyRecipe(token, values)} initialValues={recipe} />
    </div>
  );
};

const mstp = state => { return { token: state.user.token } };

export default connect(mstp, null)(CreateRecipePage);
