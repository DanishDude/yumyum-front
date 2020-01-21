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
    .then(user => {
      dispatch(fetchSuccessUser(user, token));
    })
    .catch(() => {
      dispatch(fetchErrorUser());
    });
};

export const startUpdateUser = () => ({
  type: 'START_UPDATE_USER'
});

export const successUpdateUser = user => ({
  type: 'SUCCES_UPDATE_USER',
  user
});

export const errorUpdateUser = err => ({
  type: 'ERROR_UPDATE_USER',
  err
});

export const asyncUpdateUser = (token, user) => dispatch => {
  dispatch(startUpdateUser());

  const allowed = ['displayname', 'firstname', 'lastname']
  
  console.log('BEFORE ' + user);
  
  for (const [key, value] of Object.entries(user)) {
    if (!(value && allowed.includes(key))) delete user[key];
  };

  console.log(JSON.parse(JSON.stringify(user)));
  console.log('AFTER ' + user);
  
  const options = {
    method: 'PUT',
    body: JSON.parse(JSON.stringify(user)),
    
    headers: { 'Authorization': 'Bearer ' + token }
  };

  fetch(`${url}/user`, options)
    .then(res => res.json)
    .then(user => dispatch(successUpdateUser(user)))
    .catch(err => dispatch(errorUpdateUser(err)));
};
