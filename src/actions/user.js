const url = 'http://localhost:5000/api';

export const login = user => ({
  type: 'LOGIN',
  user
});

export const signup = user => ({
  type: 'SIGNUP',
  user
});

export const startFetchUser = () => ({
  type: 'START_FETCH_USER'
});

export const fetchSuccessUser = (user, token) => ({
  type: 'SUCCESS_FETCH_USER',
  user,
  token
});

export const fetchErrorUser = err => ({
  type: 'ERROR_FETCH_USER',
  err
});

export const asyncFetchUser = token => dispatch => {
  dispatch(startFetchUser());

  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };

  fetch(`${url}/user`, options)
    .then(res => res.json())
    .then(user => dispatch(fetchSuccessUser(user, token)))
    .catch(() => {
      dispatch(fetchErrorUser());
    });
};

export const startUpdateUser = () => ({
  type: 'START_UPDATE_USER'
});

export const successUpdateUser = (token, user) => ({
  type: 'SUCCESS_UPDATE_USER',
  token,
  user
});

export const errorUpdateUser = err => ({
  type: 'ERROR_UPDATE_USER',
  err
});

export const asyncUpdateUser = (token, user) => dispatch => {
  dispatch(startUpdateUser());
  if (user.newPassword === user.confirmPassword) {
    delete user.confirmPassword;
  } else {
    return alert('New passwords do not match');
  };

  const options = {
    method: 'PUT',
    headers: { 
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token },
    body: JSON.stringify(user)
  };

  fetch(`${url}/user`, options)
    .then(res => res.json())
    .then(payload => dispatch(successUpdateUser(payload.token, payload.user)))
    .catch(err => dispatch(errorUpdateUser(err)));
};
