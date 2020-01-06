import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'

const AddRecipeButton = (user) => {
  console.log('USER', user);
  
  // verify user from token
  const history = useHistory();
  const addRecipe = () => {
    if (!user) {
      console.log('NO USER');
      history.push('/login')
    } else {
      console.log('YES USER');
    history.push('/create-recipe')
    };
  };
  return (
      <Button color="primary" type="button" onClick={addRecipe}>Add Recipe</Button>
  );
};

const mstp = state => {
  return {
    user: state.user,
  };
};

export default connect(mstp)(AddRecipeButton);
