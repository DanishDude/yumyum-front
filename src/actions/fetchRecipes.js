const url = 'http://localhost:5000/api';

export const startFetchRecipes = () => ({
  type: 'START_FETCH_RECIPES',
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
  fetch(`${url}/recipe`)
    .then(res => res.json())
    .then(recipes => {
      dispatch(fetchSuccessRecipes(recipes));
    })
    .catch(() => {
      dispatch(fetchErrorRecipes('Error loading recipes'));
    });
};

// Revise recipeImage, for GET simply add url in src, find uploader package.
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
