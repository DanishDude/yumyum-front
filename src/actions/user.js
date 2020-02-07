const url = 'http://localhost:5000/api';

export const startFetchLogin = () => ({
  type: 'START_FETCH_LOGIN'
});

export const successFetchLogin = (user, token) => ({
  type: 'SUCCESS_FETCH_LOGIN',
  user,
  token
});

export const errorFetchLogin = err => ({
  type: 'ERROR_FETCH_LOGIN',
  err
});

export const asyncFetchLogin = user => dispatch => {
  dispatch(startFetchLogin());

  const options = {
    method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
  };

  fetch(`${url}/login`, options)
    .then(res => {
      if (res.status === 401) {
        dispatch(errorFetchLogin('Invalid'));
      } else if (res.status === 200) {
        return res.json()
      }
    })
    .then(payload => {
      if (payload) dispatch(successFetchLogin(payload.user, payload.token));
    })
    .catch(err => dispatch(errorFetchLogin(err)));
};

export const startFetchSignup = () => ({
  type: 'START_FETCH_SIGNUP'
});

export const successFetchSignup = (user, token) => ({
  type: 'SUCCESS_FETCH_SIGNUP',
  user,
  token
});

export const errorFetchSignup = err => ({
  type: 'ERROR_FETCH_SIGNUP',
  err
});

export const asyncFetchSignup = user => dispatch => {
  dispatch(startFetchSignup());
  if (user.confirmPassword) delete user.confirmPassword;

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };

  fetch(`${url}/signup`, options)
    .then(res => res.json())
    .then(payload => {
      const { sqlMessage } = payload;
      
      if (sqlMessage && sqlMessage.startsWith('Duplicate entry')) {
        if (sqlMessage.endsWith('key \'EMAIL\''))
          dispatch(errorFetchSignup('dup_email'));
        if (sqlMessage.endsWith('key \'DISPLAYNAME\''))
          dispatch(errorFetchSignup('dup_displayname'));
      }
      
      if (payload.token) dispatch(successFetchSignup(payload.user, payload.token));
    })
    .catch(err => dispatch(errorFetchSignup(err)));
}

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
    .catch(() => dispatch(fetchErrorUser()));
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

  const options = {
    method: 'PUT',
    headers: { 
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token },
    body: JSON.stringify(user)
  };

  fetch(`${url}/user`, options)
    .then(res => {
      if (res.status === 401) {
        alert('Incorrect password');
      } else if (res.ok) {
        return res.json();
      } else {
        throw new Error('Something went wrong');
      };
    })
    .then(payload => dispatch(successUpdateUser(payload.token, payload.user)))
    .catch(error => dispatch(errorUpdateUser(error)));
};
