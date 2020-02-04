import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { asyncFetchLogin } from '../../actions/user';
import Login from './Login';
import './LoginPage.scss';

const LoginPage = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const signup = () => {
    user.error = '';
    history.push('/signup');
  }
  const loginUser = values => dispatch(asyncFetchLogin(values));

  return (
    <div className="LoginPage">
      <Login
        signup={signup}
        onSubmit={loginUser}
        loginError={user.error}
      />
    </div>
  );
};

export default LoginPage;
