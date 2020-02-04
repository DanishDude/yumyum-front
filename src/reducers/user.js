const initialState = {
  loading: false,
  user: {},
  token: '',
  precheck: {},
  error: ''
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case 'START_FETCH_LOGIN':
      return { ...state, loading: true };
    case 'SUCCESS_FETCH_LOGIN':
      window.localStorage.setItem('token', action.token);
      window.location.assign('/recipes');
      return { ...state, loading: false, user: action.user, token:action.token, error: '' };
    case 'ERROR_FETCH_LOGIN':
      return { ...state, loading: false, error: action.err };
    case 'START_FETCH_SIGNUP':
      return { ...state, loading: true };
    case 'SUCCESS_FETCH_SIGNUP':
      window.localStorage.setItem('token', action.token);
      window.location.assign('/recipes');
      return { ...state, loading: false, user: action.user, token:action.token, error: '' };
    case 'ERROR_FETCH_SIGNUP':
      return { ...state, loading: false, error: action.err };
    case 'START_FETCH_USER':
      return { ...state, loading: true };
    case 'SUCCESS_FETCH_USER':
      return { ...state, loading: false, user: action.user, token: action.token, error: '' };
    case 'ERROR_FETCH_USER':
      return { ...state, loading:false, error: action.err };
    case 'START_UPDATE_USER':
      return { ...state, loading: true,};
    case 'SUCCESS_UPDATE_USER':
      window.localStorage.setItem('token', action.token);
      return { ...state, loading:false, user: action.user, token: action.token, error: '' };
    case 'ERROR_UPDATE_USER':
      return { ...state, loading: false, error: action.err };
    case 'START_PRECHECK':
      return { ...state, laoding: true };
    case 'FINISH_PRECHECK':
      return { ...state, loading: false, precheck: action.precheck, error: '' };
    case 'ERROR_PRECHECK':
      return { ...state, loading: false, error: action.err };
    default:
      return state;
  };
};

export default user;
