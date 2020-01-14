const url = 'http://localhost:5000/api';

export const startFetchAddRecipe = () => ({
  type: 'START_FETCH_ADD_RECIPE'
});

export const fetchSuccessAddRecipe = recipe => ({
  type: 'FETCH_SUCCESS_ADD_RECIPE',
  recipe
});

export const fetchErrorAddRecipe = err => ({
  type: 'FETCH_ERROR_ADD_RECIPE',
  err
});

export const asyncFetchAddRecipe = (token, values) => dispatch => {
  dispatch(startFetchAddRecipe());
  let formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      if (key === 'image') {
        formData.append('recipeImage', value, value.name);
      } else {
        formData.append(key, value);
      };
    };

  const options = {
    method: 'POST',
    body: formData,
    headers: { 'Authorization': 'Bearer ' + token }
  };

  fetch(`${url}/recipe`, options)
    .then(res => res.json)
    .then(recipe => { dispatch(fetchSuccessAddRecipe(recipe)) })
    .then(() => dispatch(asyncFetchRecipes()))
    .catch(() => { dispatch(fetchErrorAddRecipe('Error adding recipe')) });
};

export const startFetchRecipes = () => ({
  type: 'START_FETCH_RECIPES'
});

export const fetchSuccessRecipes = (recipes) => ({
  type: 'FETCH_SUCCESS_RECIPES',
  recipes,
});

export const fetchErrorRecipes = (err) => ({
  type: 'FETCH_ERROR_RECIPES',
  err,
});

export const asyncFetchRecipes = () => (dispatch) => {
  dispatch(startFetchRecipes());
  fetch(`${url}/recipes`)
    .then(res => res.json())
    .then(recipes => { dispatch(fetchSuccessRecipes(recipes)) })
    .catch(() => { dispatch(fetchErrorRecipes('Error loading recipes')) });
};

export const startFetchRecipeImage = () => ({
  type: 'START_FETCH_RECIPE_IMAGE',
});

export const fetchRecepieImage = (recipeImage) => ({
  type: 'FETCH_SUCCESS_RECIPE_IMAGE',
  recipeImage,
});

export const fetchErrorRecipeImage = (err) => ({
  type: 'FETCH_ERROR_RECIPE_IMAGE',
  err,
});

export const asyncFetchRecipeImage = (recipeId) => (dispatch) => {
  dispatch(startFetchRecipeImage());
  fetch(`${url}/recipeImage/${recipeId}`)
    .then(res => res.json())
    .then(recipeImage => {
      dispatch(asyncFetchRecipeImage(recipeImage))
    })
    .catch(() => {
      dispatch(fetchErrorRecipeImage('Error loading recipe image'))
    });
};
