import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

const AddRecipeButton = () => {
  const history = useHistory();
  const addRecipe = () => {
    history.push('/create-recipe');
  };
  return (
    <Fragment>
      <Button color="primary" type="button" onClick={addRecipe}>Add Recipe</Button>
    </Fragment>
  );
};

export default AddRecipeButton;
