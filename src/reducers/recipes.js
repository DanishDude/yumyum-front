const initialState = {
  loading: false,
  recipe: {},
  recipes: [],
  error: '',
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_ADD_MODIFY_RECIPE':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS_ADD_RECIPE':
      return { ...state, loading: false, error: '' };
    case 'FETCH_SUCCESS_MODIFY_RECIPE': {
      const newRecipes = [...state.recipes.filter(r => r.id !== action.recipe.id), action.recipe];
      return { ...state, loading: false, error: '', recipes: newRecipes };
    };
    case 'FETCH_ERROR_ADD_MODIFY_RECIPE':
      return { ...state, loading: false, error: action.err };
    case 'START_FETCH_RECIPE':
      return { ...state, loading: true };
    case 'SUCCESS_FETCH_RECIPE':
      if (action.recipe) {
        if (action.recipe.ingredients)
          action.recipe.ingredients = action.recipe.ingredients.split(',')
        if (action.recipe.instructions)
          action.recipe.instructions = action.recipe.instructions.split('|');
      }
      return { ...state, loading: false, recipe: action.recipe, error: '' };
    case 'START_FETCH_RECIPES':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS_RECIPES':
      return { ...state, loading: false, recipes: [...action.recipes], error: '' };
    case 'FETCH_ERROR_RECIPES':
      return { ...state, loading: false, error: action.err };
    case 'START_FETCH_RECIPES_BY_USER':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS_RECIPES_BY_USER': {
      const userRecipes = action.userRecipes.map(ur => {
        if (ur.ingredients) ur.ingredients = ur.ingredients.split(',');
        if (ur.instructions) ur.instructions = ur.instructions.split('|');
        return ur;
      });
      
      const newRecipes = [
        ...state.recipes
        .filter(r => !(action.userRecipes.map(ur => ur.id).includes(r.id)))
        .concat(userRecipes)
      ];
      return { ...state, loading: false, recipes: newRecipes };
    };
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
