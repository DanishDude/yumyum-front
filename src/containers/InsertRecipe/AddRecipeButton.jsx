import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

const AddRecipeButton = (user) => {
  const history = useHistory();
  const addRecipe = () => {
    history.push('/create-recipe');
  };
  const addRecipeOLD = () => {
    history.push('/old-create-recipe');
  };
  return (
    <Fragment>
      <Button color="primary" type="button" onClick={addRecipe}>Add Recipe</Button>
      <Button type="button" onClick={addRecipeOLD}>OLD Add Recipe</Button>
    </Fragment>
  );
};

export default AddRecipeButton;
