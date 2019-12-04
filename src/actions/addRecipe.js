const url = 'http:localhost:5000/api';

export const addRecipe = (newRecipe) => ({
  type: 'ADD_RECIPE',
  newRecipe,
});

/* export const successAddRecipe = (recipes) => ({
  type: 'SUCCESS_ADD_RECIPE',
  recipes,
});

export const errorAddRecipe = (err) => ({
  type: 'ERROR_ADD_RECIPE',
  err,
});

export const asyncFetchAddRecipe = (newRecipe) => {
  dispatch(startAddRecipe());
  fetch(`${url}/recipe`, {
    method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe)
  })
  .then(res => {
    if (res.status === 500) {
      alert('Error adding new recipe');
      console.log(res.body);
    }
  })
  .catch (() => {
    dispatch(errorAddRecipe('Error adding recipe'))
  });
}; */
