const initialState = {
  loading: false,
  user: {},
  token: '',
  error: ''
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...state, ...action.user };
    case 'SIGNUP':
      return { ...state, ...action.user };
    case 'START_FETCH_USER':
      return { ...state, loading: true };
    case 'SUCCESS_FETCH_USER':
      return { ...state, loading: false, user: action.user, token: action.token };
    case 'ERROR_FETCH_USER':
      return { ...state, loading:false, error: action.err };
    case 'START_UPDATE_USER':
      return { ...state, loading: true };
    case 'SUCCESS_UPDATE_USER':
      return { ...state, loading:false, user: action.user };
    case 'ERROR_UPDATE_USER':
      return { ...state, loading: false, error: action.err };
    default:
      return state;
  };
};

export default user;
