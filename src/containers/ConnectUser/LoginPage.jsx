import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { asyncFetchLogin } from '../../actions/user';
import Login from './Login';
import './LoginPage.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const createAccount = () => history.push('/signup');
  const loginUser = values => dispatch(asyncFetchLogin(values));
  const afterSubmit = () => history.push('/recipes');

  return (
    <div className="LoginPage">
      <Login
        createAccount={createAccount}
        onSubmit={loginUser}
        onSubmitSuccess={afterSubmit}
      />
    </div>
  );
};

export default LoginPage;
