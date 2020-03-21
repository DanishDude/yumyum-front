const url = 'http://localhost:5000/api';

// -------- Add-Modify recipe -------- //
export const startFetchAddModifyRecipe = () => ({
  type: 'START_FETCH_ADD_MODIFY_RECIPE'
});

export const fetchSuccessAddRecipe = recipe => ({
  type: 'FETCH_SUCCESS_ADD_RECIPE',
  recipe
});

export const fetchSuccessModifyRecipe = recipe => ({
  type: 'FETCH_SUCCESS_MODIFY_RECIPE',
  recipe
});

export const fetchErrorAddModifyRecipe = err => ({
  type: 'FETCH_ERROR_ADD_MODIFY_RECIPE',
  err
});

export const asyncFetchAddModifyRecipe = (token, recipe) => dispatch => {
  dispatch(startFetchAddModifyRecipe());
  let fd = new FormData();
  
    for (const [key, value] of Object.entries(recipe)) {
      if (value) {
        if (key === 'image') {
          (value && typeof value !== 'string')
            ? fd.append('image', value, value.name)
            : fd.append('image', {}, value);
        } else if (key === 'instructions') {
          fd.append(key, value.join('|'));
        } else {
          fd.append(key, value);
        };
      };
    };

  const options = {
    method: recipe.id ? 'PUT' : 'POST',
    body: fd,
    headers: { 'Authorization': 'Bearer ' + token }
  };

  fetch(`${url}/recipe${recipe.id ? `/${recipe.id}` : ''}`, options)
    .then(res => res.json())
    .then(recipe => {
      if (options.method === 'PUT') {
        dispatch(fetchSuccessModifyRecipe(recipe));
      } else {
        dispatch(fetchSuccessAddRecipe(recipe));
      };
      window.location.assign(`/recipe/${recipe.id}`);
    })
    .catch((err) => dispatch(fetchErrorAddModifyRecipe(err)));
};

// -------- Get recipes -------- //
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

// -------- Get 1 recipe with params -------- //
export const startFetchRecipe = () => ({
  type: 'START_FETCH_RECIPE'
});

export const successFetchRecipe = recipe => ({
  type: 'SUCCESS_FETCH_RECIPE',
  recipe
});

export const errorFetchRecipe = err => ({
  type: 'ERROR_FETCH_RECIPE',
  err
});

export const asyncFetchRecipe = id => dispatch => {
  dispatch(startFetchRecipe());
  fetch(`${url}/recipe/${id}`)
    .then(res => res.json())
    .then(recipe => dispatch(successFetchRecipe(recipe)))
    .catch(() => dispatch(errorFetchRecipe('Error loading recipe')));
};

// -------- Get recipe image -------- //
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

// -------- Get recipes by user -------- //
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
  fetch(`${url}/recipes/user`, { headers: { 'Authorization': 'Bearer ' + token } })
    .then(res => res.json())
    .then(userRecipes => dispatch(fetchSuccessRecipesByUser(userRecipes)))
    .catch((err) => dispatch(fetchErrorRecipesByUser(err)));
};

// -------- Delete recipe -------- //
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
    .then(res => res.text())
    .then(() => {
      dispatch(successFetchDeleteRecipe());
      dispatch(asyncFetchRecipes());
      dispatch(asyncFetchRecipesByUser(token));
    })
    .catch((err) => dispatch(errorFetchDeleteRecipe(err)));
};
