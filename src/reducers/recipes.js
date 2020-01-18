const initialState = {
  loading: false,
  recipes: [],
  error: '',
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_ADD_RECIPE':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS_ADD_RECIPE':
      return { ...state, loading: false, error: '', recipes: [...state.recipes, action.recipe] };
    case 'FETCH_ERROR_ADD_RECIPE':
      return { ...state, loading: false, error: action.err };
    case 'START_FETCH_RECIPES':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS_RECIPES':
      return { ...state, loading: false, recipes: [...action.recipes], error: '' };
    case 'FETCH_ERROR_RECIPES':
      return { ...state, loading: false, error: action.err };
    case 'START_FETCH_RECIPES_BY_USER':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS_RECIPES_BY_USER':
      const newRecipes = [
        ...state.recipes
        .filter(r => !(action.userRecipes.map(ur => ur.id).includes(r.id)))
        .concat(action.userRecipes)
      ];
      return { ...state, loading: false, recipes: newRecipes };
    case 'FETCH_ERROR_RECIPES_BY_USER':
      return { ...state, error: action.err };
    case 'START_FETCH_DELETE_RECIPE':
      return { ...state, loading: true };
    case 'SUCCESS_FETCH_DELETE_RECIPES':
      return { ...state, loading: false, error: '' };
    case 'ERROR_FETCH_DELETE_RECIPES':
      return { ...state, loading: false, error: action.err };
    default:
      return state;
  };
};

export default recipes;
