const initialState = {
  token: '',
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN': {
      return { ...action.user }
    };
    case 'SIGNUP': {
      return { ...action.user }
    };
    default:
      return state;
  };
};

export default user;
