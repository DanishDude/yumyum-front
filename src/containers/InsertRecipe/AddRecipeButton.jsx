import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

const AddRecipeButton = (user) => {
  const history = useHistory();
  const addRecipe = () => {
    history.push('/create-recipe');
  };
  return (
      <Button color="primary" type="button" onClick={addRecipe}>Add Recipe</Button>
  );
};

export default AddRecipeButton;
