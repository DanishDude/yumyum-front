const initialState = {
  loading: false,
  recepies: [],
  error: '',
};

const recepies = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_RECEPIES': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_RECEPIES': {
      return {
        ...state,
        loading: false,
        recepies: [...action.recepies],
        error: '',
      };
    }
    case 'FETCH_ERROR_RECEPIES': {
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

export default recepies;
