import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

const CancelAddRecipe = () => {
  const history = useHistory();
  const goToRecipes = () => history.push('/recipes');
  return (
      <Button color="link" type="button" onClick={goToRecipes}>Cancel</Button>
  );
};

export default CancelAddRecipe;
