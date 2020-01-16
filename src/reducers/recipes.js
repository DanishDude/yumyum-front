const initialState = {
  loading: false,
  recipes: [],
  userRecipes: [],
  form: { insertRecipe: { initialValues: {} } },
  error: '',
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_ADD_RECIPE':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS_ADD_RECIPE':
      return { ...state, loading: false, error: '' };
    case 'FETCH_ERROR_ADD_RECIPE':
      return { ...state, loading: false, error: action.err };
    /* case 'INITIALIZE_MODIFY_RECIPE':
      console.log('hello');
      console.log(action.recipe);
      
      return { ...state, form: { insertRecipe: { initialValues: action.recipe } } }; */
    case 'START_FETCH_RECIPES':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS_RECIPES':
      return { ...state, loading: false, recipes: [...action.recipes], error: '' };
    case 'FETCH_ERROR_RECIPES':
      return { ...state, loading: false, error: action.err };
    case 'START_FETCH_RECIPES_BY_USER':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS_RECIPES_BY_USER':
      return {  ...state, loading: false, userRecipes: [...action.userRecipes] };
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
