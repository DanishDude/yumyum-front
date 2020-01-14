const initialState = {
  loading: false,
  userRecipes: [],
  error: '',
};

const userRecipes = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_RECIPES_BY_USER':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS_RECIPES_BY_USER':
      return {  ...state, loading: false, userRecipes: [...action.userRecipes] };
    case 'FETCH_ERROR_RECIPES_BY_USER':
      return { ...state, error: action.err };
    default:
      return state;
  };
};

export default userRecipes;
