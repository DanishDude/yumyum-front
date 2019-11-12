const initialState = {
  loading: false,
  recipes: [],
  error: '',
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_RECIPES': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_RECIPES': {
      return {
        ...state,
        loading: false,
        recipes: [...action.recipes],
        error: '',
      };
    }
    case 'FETCH_ERROR_RECIPES': {
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    }
    default:
      return state;
  }
};

export default recipes;