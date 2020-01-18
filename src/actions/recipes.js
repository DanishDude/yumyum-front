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

export const asyncFetchAddModifyRecipe = (token, values) => dispatch => {
  dispatch(startFetchAddRecipe());
  let fd = new FormData();
  console.log(Object.keys(values));
  
    for (const [key, value] of Object.entries(values)) {
      console.log(`${key}: ${value}`);
      if (value)
      if (key === 'image') {
        value ? fd.append('image', value, value.name) : fd.append('image', null);
      } else {
        fd.append(key, value);
      };
    };

  const options = {
    method: values.id ? 'PUT' : 'POST',
    body: fd,
    headers: { 'Authorization': 'Bearer ' + token }
  };

  fetch(`${url}/recipe${values.id ? `/${values.id}` : ''}`, options)
    .then(res => res.json())
    .then(recipe => dispatch(fetchSuccessAddRecipe(recipe)))
    .catch((err) => {
      console.log(err);
      
      dispatch(fetchErrorAddRecipe('Error adding/modyfying recipe'))
    });
};

export const startFetchRecipes = () => ({
  type: 'START_FETCH_RECIPES'
});

export const fetchSuccessRecipes = recipes => ({
  type: 'FETCH_SUCCESS_RECIPES',
  recipes,
});

export const fetchErrorRecipes = err => ({
  type: 'FETCH_ERROR_RECIPES',
  err,
});

export const asyncFetchRecipes = () => dispatch => {
  dispatch(startFetchRecipes());
  fetch(`${url}/recipes`)
    .then(res => res.json())
    .then(recipes => { dispatch(fetchSuccessRecipes(recipes)) })
    .catch(() => { dispatch(fetchErrorRecipes('Error loading recipes')) });
};

export const startFetchRecipeImage = () => ({
  type: 'START_FETCH_RECIPE_IMAGE',
});

export const fetchRecepieImage = recipeImage => ({
  type: 'FETCH_SUCCESS_RECIPE_IMAGE',
  recipeImage,
});

export const fetchErrorRecipeImage = err => ({
  type: 'FETCH_ERROR_RECIPE_IMAGE',
  err,
});

export const asyncFetchRecipeImage = recipeId => dispatch => {
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

export const startFetchRecipesByUser = () => ({
  type: 'START_FETCH_RECIPES_BY_USER'
});

export const fetchSuccessRecipesByUser = userRecipes => ({
  type: 'FETCH_SUCCESS_RECIPES_BY_USER',
  userRecipes
});

export const fetchErrorRecipesByUser = err => ({
  type: 'FETCH_ERROR_RECIPES_BY_USER',
  err
});

export const asyncFetchRecipesByUser = token => dispatch => {
  dispatch(startFetchRecipesByUser());
  fetch(`${url}/user-recipes`, { headers: { 'Authorization': 'Bearer ' + token } })
    .then(res => res.json())
    .then(userRecipes => { dispatch(fetchSuccessRecipesByUser(userRecipes)) })
    .catch(() => { dispatch(fetchErrorRecipesByUser()) });
};

export const startFetchDeleteRecipe = () => ({
  type: 'START_FETCH_DELETE_RECIPE'
});

export const successFetchDeleteRecipe = () => ({
  type: 'SUCCESS_FETCH_DELETE_RECIPE'
});

export const errorFetchDeleteRecipe = err => ({
  type: 'ERROR_FETCH_DELETE_RECIPE',
  err
});

export const asyncFetchDeleteRecipe = (token, recipeId) => dispatch => {
  dispatch(startFetchDeleteRecipe());

  const options = {
    method: 'DELETE',
    headers: { 'Authorization': 'Bearer ' + token }
  };

  fetch(`${url}/recipe/${recipeId}`, options)
    .then(res => res.json())
    .then((toto) => {
      console.log(toto);
      
      dispatch(successFetchDeleteRecipe())
    })
    .then(() => {
      dispatch(asyncFetchRecipes());
      dispatch(asyncFetchRecipesByUser(token))
    })
    .catch(() => dispatch(errorFetchDeleteRecipe('Error deleting recipe')))
};
