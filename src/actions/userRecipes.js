const url = 'http://localhost:5000/api';

export const startFetchRecipesByUser = () => ({
  type: 'START_FETCH_RECIPES_BY_USER'
});

export const fetchSuccessRecipesByUser = (userRecipes) => ({
  type: 'FETCH_SUCCESS_RECIPES_BY_USER',
  userRecipes
});

export const fetchErrorRecipesByUser = (err) => ({
  type: 'FETCH_ERROR_RECIPES_BY_USER',
  err
});

export const asyncFetchRecipesByUser = (userId) => (dispatch) => {
  dispatch(startFetchRecipesByUser());
  fetch(`${url}/recipes/${userId}`)
    .then(res => res.json())
    .then(userRecipes => {
      dispatch(fetchSuccessRecipesByUser(userRecipes));
    })
    .catch(() => {
      dispatch(fetchErrorRecipesByUser());
    });
};
