const initialState = {
  loading: false,
  recipes: [],
  error: '',
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case 'START_ADD_RECIPE': {
      return {
        ...state,
        loading: true
      };
    };
    case 'SUCCESS_ADD_RECIPE': {
      return {
        ...state,
        loading: false,
        recipes: [...recipes, ...action.recipe],
        error: ''
      };
    };
    case 'ERROR_ADD_RECIPE': {
      return {
        ...state,
        loading: false,
        error: action.err
      };
    };
    case 'START_FETCH_RECIPES': {
      return {
        ...state,
        loading: true
      };
    };
    case 'FETCH_SUCCESS_RECIPES': {
      return {
        ...state,
        loading: false,
        recipes: [...action.recipes],
        error: ''
      };
    };
    case 'FETCH_ERROR_RECIPES': {
      return {
        ...state,
        loading: false,
        error: action.err
      };
    };
    default:
      return state;
  };
};

export default recipes;
